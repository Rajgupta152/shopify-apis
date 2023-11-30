const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createPriceRuleThatHaveGivesBuyerFreeShipping',async (req,res) => {
    const {title, value_type, value, customer_selection, target_type, target_selection, allocation_method, usage_limit, prerequisite_subtotal_range, starts_at} = req.body

    if(!title || !value_type || !value || !customer_selection || !target_type || !target_selection || !allocation_method || !usage_limit || !prerequisite_subtotal_range || !starts_at){

        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const obj = {
            title, 
            target_type, 
            target_selection, 
            allocation_method,
            value_type, 
            value,
            usage_limit, 
            customer_selection,  
            prerequisite_subtotal_range,
            starts_at
        }

        const priceRules = await shopifyStore.priceRule.create(obj);
       
        return res.status(200).send({ status : 'success', message: 'Price rule created succesfully', priceRules: priceRules });
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: 'Internal Server Error'});
    }
})


module.exports = router;