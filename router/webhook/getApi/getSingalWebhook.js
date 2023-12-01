const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.get('/getSingalWebhook/:id',async (req,res) => {
    const {id} = req.params;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getWebhook = await shopifyStore.webhook.get(id);

        return res.status(200).send({status: 'Success', message: 'Webhooks retrieved successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;