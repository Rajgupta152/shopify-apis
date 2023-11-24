const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.get('/productBelongsToCollection/:id',async (req,resp) => {
    collection_id = req.params.id
    if(!collection_id){
        return resp.status(400).send({ status:'error', message: 'collection_id Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getProduct = await shopifyStore.product.list({collection_id: collection_id});

        return resp.status(200).send({status: 'Success', message: 'product belongs to collection', product: getProduct });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;