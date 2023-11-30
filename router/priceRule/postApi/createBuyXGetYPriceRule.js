const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createBuyXGetYPriceRule',async (req,res) => {
    const {title, value_type, value, customer_selection, target_type, target_selection, allocation_method, starts_at, prerequisite_collection_ids, entitled_product_ids, prerequisite_to_entitlement_quantity_ratio, allocation_limit} = req.body

    if(!title || !value_type || !value || !customer_selection || !target_type || !target_selection || !allocation_method || !starts_at || !prerequisite_collection_ids || !entitled_product_ids || !prerequisite_to_entitlement_quantity_ratio || !allocation_limit){

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
            value_type, 
            value, 
            customer_selection, 
            target_type, 
            target_selection, 
            allocation_method, 
            starts_at, 
            prerequisite_collection_ids, 
            entitled_product_ids, 
            prerequisite_to_entitlement_quantity_ratio, 
            allocation_limit
        }

        const priceRules = await shopifyStore.priceRule.create(obj);
       
        return res.status(200).send({ status : 'success', message: 'Price rule created succesfully', priceRules: priceRules });
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: 'Internal Server Error'});
    }
})


module.exports = router;