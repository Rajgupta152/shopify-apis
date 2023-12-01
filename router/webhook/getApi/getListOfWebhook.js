const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.get('/getListOfWebhook',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getWebhook = await shopifyStore.webhook.list();

        return resp.status(200).send({status: 'Success', message: 'Webhooks retrieved successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;