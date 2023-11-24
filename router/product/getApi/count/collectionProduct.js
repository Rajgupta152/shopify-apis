const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.get('/collectionProductCount/:id',async (req,res) => {
    const collection_id = req.params.id;
    if (!collection_id) {
        return res.status(400).send({ status:'error', message: 'collection_id Not Found' });  
    }

    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getProduct = await shopifyStore.product.count({collection_id: collection_id});

        return res.status(200).send({status:'success', message: 'Products count retrieved successfully', productCount: getProduct });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;