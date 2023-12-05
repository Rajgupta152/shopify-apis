const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const schema = require('../../../../model/collectionSchema');
require("dotenv").config();

router.post('/webhookForDeleteCollection',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let _webhook = {
            topic: "collections/delete",
            address: `https://c110-2401-4900-1ca2-ba86-7179-4374-5de7-2b09.ngrok-free.app/api/deleteCollection`,
            format: "json",
          };

        let getWebhook = await shopifyStore.webhook.create(_webhook);

        return resp.status(200).send({status: 'Success', message: 'Webhooks created successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

router.post('/deleteCollection', async(req,res) => {
    try{
        const {id} = req.body;
        await schema.findOneAndDelete(id);

        console.log(req.body);
        res.status(200).send({status: 'Success', message: 'collection deleted'})
    } catch(err){
        console.log(err);
        res.status(500).send({error: 'Internal server error'});
    }
})

module.exports = router;