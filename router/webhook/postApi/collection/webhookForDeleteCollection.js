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
            address: `https://82b0-2401-4900-1c09-9072-ac2a-e1cc-f334-69a7.ngrok-free.app/api/deleteCollection`,
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
        const id = req.body.id;
        await schema.findOneAndDelete(id);

        console.log(req);
        res.status(200).send({status: 'Success', message: 'collection deleted'})
    } catch(err){
        console.log(err);
        res.status(500).send({error: 'Internal server error'});
    }
})

module.exports = router;