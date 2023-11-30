const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getSingalDiscountCode',async (req,res) => {
    const {price_rule_id, id} = req.body;
    if(!price_rule_id || !id){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const discountCode = await shopifyStore.discountCode.get(price_rule_id,id);
       
        return res.status(200).send({ status : 'success', discountCode: discountCode });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;