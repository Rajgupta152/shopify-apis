const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getCountOfAllCustomer',async (req,res) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerCount = await shopifyStore.customer.count()
        
        return res.status(200).send({status: 'Success', message: 'Customer order retrieved successfully', customerCount: getCustomerCount});
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: 'Internal Server Error'});
    }
})

//..............................demo

router.get('/getCountOfAllCustomer1',async (req,res) => {
    try{

        
        const shopifyStore = new shopify({
            shopName:"edge-entity.myshopify.com",
            accessToken: "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",
            apiVersion: process.env.APIVERSION
        });

        let getCustomerCount = await shopifyStore.customer.count()
        
        return res.status(200).send({status: 'Success', message: 'Customer order retrieved successfully', customerCount: getCustomerCount});
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: 'Internal Server Error'});
    }
})


router.get('/searchCustomerWithEmail1',async (req,res) => {
    const {email} = req.body;
    if(!email){
        return res.status(400).send({ status:'error', message: 'email Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName:"edge-entity.myshopify.com",
            accessToken: "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",
            apiVersion: process.env.APIVERSION
        });

        let getCustomerAccEmail = await shopifyStore.customer.search({email:email})
        
        return res.send({ message: 'Customer retrieved successfully', customer: getCustomerAccEmail });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})
module.exports = router;