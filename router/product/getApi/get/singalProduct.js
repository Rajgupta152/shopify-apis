const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.get('/singalProduct/:id',async (req,resp) => {
    const id = req.params.id;
    if(!id){
        return resp.status(400).send({ status:'error', message: 'id Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getProduct = await shopifyStore.product.get(id)

        return resp.status(200).send({status: 'Success', message: 'Products retrieved successfully', product: getProduct });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;