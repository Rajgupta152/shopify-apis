const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateDiscountCode/:id',async (req,resp) => {
    const price_rule_id = 1405862019364;
    const id = req.params.id;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const newDiscountCode = {
            code: 'HOLOOFFER50OFF',
        }
        const discount = await  shopifyStore.discountCode.update(price_rule_id,id,newDiscountCode);
       
        return resp.status(200).send({ status : 'success ', updatedDiscount: discount });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;