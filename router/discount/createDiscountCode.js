const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createDiscountCode',async (req,resp) => {
    const price_rule_id = 1405862019364;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const newDiscountCode = {
            code: 'dummy939esjnhd',
        }
        const discount = await  shopifyStore.discountCode.create(price_rule_id,newDiscountCode);
       
        return resp.status(200).send({ status : 'success ', discount: discount });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;