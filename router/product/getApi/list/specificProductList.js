const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.get('/specificProductsList',async (req,resp) => {
    const{ids} = req.body;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const getProduct = await shopifyStore.product.list({ids : ids});

        return resp.status(200).send({status: 'Success', message: 'Specific products retrieved successfully', product: getProduct });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;