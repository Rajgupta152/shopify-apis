const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/customer',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomer = await shopifyStore.customer.list();
        // let getCustomer = await shopifyStore.customer.count()
        

        return resp.send({ message: 'Products retrieved successfully', customer: getCustomer });
    } catch(error) {
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;