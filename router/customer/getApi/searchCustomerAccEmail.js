const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerWithEmail',async (req,res) => {
    const {email} = req.body;
    if(!email){
        return res.status(400).send({ status:'error', message: 'email Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
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