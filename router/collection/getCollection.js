const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getcollection/:id',async (req,resp) => {
    const {id} = req.params;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCollection = await shopifyStore.collection.products(id)
        // let getCollection = await shopifyStore.collectionListing.get(458262118692)
        


        return resp.status(200).send({ status : 'success ', collection: getCollection });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;