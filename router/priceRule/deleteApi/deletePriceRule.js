const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.delete('/deletePriceRule/:id',async (req,res) => {
    const {id} = req.params;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const deletedPriceRule = await shopifyStore.priceRule.delete(id);
       
        return res.status(200).send({ status : 'success', message: 'Price rule deleted', deletedPriceRule: deletedPriceRule });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;