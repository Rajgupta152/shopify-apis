const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/policy',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        
        const info = await shopifyStore.policy.list();

        return resp.status(200).send({ status : 'success ', policy: info });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;