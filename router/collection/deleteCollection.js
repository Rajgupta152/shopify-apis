const express = require("express");
const router = express.Router();
const Shopify = require("shopify-api-node");

router.delete('/delete/:id',async (req,resp) => {

    const id = req.params.id;
    try{
        const shopifyStore = new Shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const collections = await shopifyStore.customCollection.delete(id);
        resp.send({message: 'Collection deleted',collection: collections});
    } catch(error){
        console.log(error);
    }

})

module.exports = router;