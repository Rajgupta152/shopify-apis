const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getCountOfCustomerChangedAfterSpecificDate',async (req,res) => {
    const {updated_at_min} = req.body
    if(!updated_at_min){
        return res.status(400).send({ status:'error', message: 'updated_at_min Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerCount = await shopifyStore.customer.count({updated_at_min: updated_at_min})
        
        return res.status(200).send({status: 'Success', message: 'Customer order retrieved successfully', customerCount: getCustomerCount});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;