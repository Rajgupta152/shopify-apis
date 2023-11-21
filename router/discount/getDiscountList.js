const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/discount-code-list',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        
        const discount = await shopifyStore.discountCode.list(1405862019364);
       
        return resp.status(200).send({ status : 'success ', discount: discount });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;