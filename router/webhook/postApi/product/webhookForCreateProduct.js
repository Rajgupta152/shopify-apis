const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const schema = require('../../../../model/productSchema');
require("dotenv").config();

router.post('/webhookForCreateProduct',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let _webhook = {
            topic: "products/create",
            address: `https://82b0-2401-4900-1c09-9072-ac2a-e1cc-f334-69a7.ngrok-free.app/api/createProduct`,
            format: "json",
          };

        let getWebhook = await shopifyStore.webhook.create(_webhook);

        return resp.status(200).send({status: 'Success', message: 'Webhooks created successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

router.post('/createProduct', async (req,res) => {
    
    try{
        const id = req.body.id;
        const product = {
            id: req.body.id,
            title: req.body.title,
            product_type: req.body.product_type,
            vendor: req.body.vendor,
            status: req.body.status,
            created_at: req.body.created_at,
            variants: req.body.variants
        }

        const updateProduct = await schema.findOneAndUpdate({id: id},product,{new: true, upsert: true});
        console.log('updated product',updateProduct);
        console.log(req.body);
        res.status(200).send({status: 'Success', notification: 'Product created'});
    } catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal server error'});
    }
})

module.exports = router;