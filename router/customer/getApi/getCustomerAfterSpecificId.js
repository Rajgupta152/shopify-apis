const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getCustomerAfterSpecificId',async (req,res) => {
    const {since_id} = req.body;
    if(!since_id){
        return res.status(400).send({ status:'error', message: 'since_id Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomer = await shopifyStore.customer.list({since_id: since_id});
        
        
        return res.status(200).send({status: 'Sucess', message: 'Customer retrieved successfully', customer: getCustomer});
    } catch(error) {
        console.log(error)
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;