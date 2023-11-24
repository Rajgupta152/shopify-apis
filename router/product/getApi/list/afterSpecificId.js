const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.get('/productsAfterSpecificId/:id',async (req,resp) => {
    const {since_id} = req.params.id
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getProduct = await shopifyStore.product.list({since_id : since_id});

        return resp.status(200).send({status:'Success', message: 'Products retrieved successfully', product: getProduct });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;