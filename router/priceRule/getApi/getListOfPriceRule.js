const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getListOfPriceRule',async (req,res) => {

    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const priceRules = await shopifyStore.priceRule.list();
       
        return res.status(200).send({ status : 'success', priceRules: priceRules });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;