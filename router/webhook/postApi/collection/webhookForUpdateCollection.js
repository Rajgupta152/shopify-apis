const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const schema = require('../../../../model/collectionSchema');
const collectionsProductSchema = require('../../../../model/collectionsProductSchema');
require("dotenv").config();

const shopifyStore = new shopify({
    shopName: process.env.SHOPNAME,
    accessToken: process.env.ACCESSTOKEN,
    apiVersion: process.env.APIVERSION
});

router.post('/webhookForUpdateCollection',async (req,resp) => {
    try{
        let _webhook = {
            topic: "collections/update",
            address: `https://c110-2401-4900-1ca2-ba86-7179-4374-5de7-2b09.ngrok-free.app/api/updateCollection`,
            format: "json",
          };

        let getWebhook = await shopifyStore.webhook.create(_webhook);

        return resp.status(200).send({status: 'Success', message: 'Webhooks created successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

router.post('/updateCollection', async(req,res) => {
    try{
        const id = req.body.id;
        const updatedCollection = {
            id: req.body.id,
            title: req.body.title,
            body_html: req.body.body_html,
            published_at: req.body.published_at,
        }

        const collection = await schema.findOneAndUpdate({id: id},updatedCollection,{new: true, upsert: true});
        
        console.log('id',id);
        let getCollectionProducts = await shopifyStore.collection.products(id);
        getCollectionProducts.map((item) => {
            const product =  new collectionsProductSchema({
                id: item.id,
                title: item.title,
                vendor: item.vendor,
                product_type: item.product_type,
                created_at: item.created_at,
                status: item.status
            })
            console.log('product',product)
    
            product.save();
        })


        console.log('collection product',getCollectionProducts);

        // console.log('updated collection',collection);
        // console.log(req);
        res.status(200).send({status: "Success", message: "Collection created succesfully", collection: collection});

    } catch(err){
        console.error(err);
        res.status(500).send({error: 'Internal server error'});
    }
})

module.exports = router;