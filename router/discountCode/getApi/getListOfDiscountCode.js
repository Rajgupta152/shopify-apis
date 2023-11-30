const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getListOfDiscountCode/:price_rule_id',async (req,resp) => {
    const {price_rule_id} = req.params;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const discountCode = await shopifyStore.discountCode.list(price_rule_id);
       
        return resp.status(200).send({ status : 'success', discountCode: discountCode });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;