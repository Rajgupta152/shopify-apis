const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createCustomer',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const {first_name, last_name, email, phone} = req.body; 

        const newCustomer = {
            first_name,
            last_name,
            email,
            phone,
        }

        const createCustomer = shopifyStore.customer.create(newCustomer);

        return resp.send({ message: 'Customer added successfully'});
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;