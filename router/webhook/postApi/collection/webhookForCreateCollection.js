const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const schema = require('../../../../model/collectionSchema');
require("dotenv").config();

const shopifyStore = new shopify({
    shopName: process.env.SHOPNAME,
    accessToken: process.env.ACCESSTOKEN,
    apiVersion: process.env.APIVERSION
});

router.post('/webhookForCreateCollection',async (req,resp) => {
    try{

        let _webhook = {
            topic: "collections/create",
            address: `https://c110-2401-4900-1ca2-ba86-7179-4374-5de7-2b09.ngrok-free.app/api/createCollection`,
            format: "json",
          };

        let getWebhook = await shopifyStore.webhook.create(_webhook);

        return resp.status(200).send({status: 'Success', message: 'Webhooks created successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

router.post('/createCollection', async(req,res) => {
    try{
        const id = req.body.id;
        const collection = new schema({
            id: req.body.id,
            title: req.body.title,
            body_html: req.body.body_html,
            published_at: req.body.published_at,
        })

        collection.save();

        // console.log(req);
        res.status(200).send({status: "Success", message: "Collection created succesfully", collection: collection});

    } catch(err){
        console.error(err);
        res.status(500).send({error: 'Internal server error'});
    }
})

module.exports = router;