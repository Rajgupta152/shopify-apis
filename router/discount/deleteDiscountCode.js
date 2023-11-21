const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.delete('/deleteDiscountCode/:id',async (req,resp) => {
    const price_rule_id = 1405862019364;
    const id = req.params.id;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const discount = await  shopifyStore.discountCode.delete(price_rule_id,id);
       
        return resp.status(200).send({ status : 'Discount code deleted ', discount: discount });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;