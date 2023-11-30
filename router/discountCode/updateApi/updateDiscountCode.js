const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateDiscountCode',async (req,res) => {
    const {price_rule_id, id, code} = req.body;
    if(!price_rule_id || !id || !code){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const discount = await  shopifyStore.discountCode.update(price_rule_id,id,{code: code});
       
        return res.status(200).send({status: 'Success', message : 'Discount code updated succesfully', updatedDiscount: discount });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;