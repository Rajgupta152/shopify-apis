const express = require("express");                //Not working
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createDiscountCodeCreationJob/:price_rule_id',async (req,res) => {
    const {price_rule_id} = req.params;
    const {batch} = req.body;
    if(!price_rule_id || !code){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const discount = await  shopifyStore.discountCode.create(price_rule_id, {batch: batch});
       
        return res.status(200).send({ status : 'success ', discount: discount });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;