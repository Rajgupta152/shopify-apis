const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getCustomersOpenOrder/:id',async (req,res) => {
    const {id} = req.params
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerOrder = await shopifyStore.customer.orders(id)
        
        return res.status(200).send({status: 'Success', message: 'Customer order retrieved successfully', customerOrder: getCustomerOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;