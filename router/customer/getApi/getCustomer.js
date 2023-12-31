const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getAllCustomer',async (req,res) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomer = await shopifyStore.customer.list();        

        return res.send({ message: 'Customer retrieved successfully', customer: getCustomer });
    } catch(error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;