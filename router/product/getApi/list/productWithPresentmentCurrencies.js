const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

//Not Working

router.get('/productWithPresentmentCurrencies',async (req,resp) => {
    // presentmentCurrencies = req.body.presentment_currencies
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getProduct = await shopifyStore.product.list({presentment_currencies: "kd", limit: 1});

        return resp.status(200).send({status: 'Success', message: 'product', product: getProduct });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;