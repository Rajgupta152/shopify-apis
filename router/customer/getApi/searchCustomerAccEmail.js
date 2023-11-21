const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerAccEmail',async (req,resp) => {
    const email = req.body.email;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerAccEmail = await shopifyStore.customer.search({email:email})
        
        return resp.send({ message: 'Customer retrieved successfully', customer: getCustomerAccEmail });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;