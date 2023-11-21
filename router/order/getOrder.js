const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/order',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getOrder = await shopifyStore.order.list()
        // let getCollection = await shopifyStore.collectionListing.get(458262118692)
        // let getCollection = await shopifyStore.collection.products(458262118692)


        return resp.send({ message: 'Products retrieved successfully', order: getOrder });
    } catch(error) {
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;