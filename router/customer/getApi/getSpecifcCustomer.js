const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/specificCustomer/:id',async (req,resp) => {
    const id = req.params.id
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomer = await shopifyStore.customer.get(id);
        
        
        return resp.send({ message: 'Products retrieved successfully', customer: getCustomer });
    } catch(error) {
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;