const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateCustomer/:id',async (req,resp) => {
    const id = req.params.id;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const {first_name, last_name, email} = req.body; 

        const updateCustomer = {
            first_name,
            last_name,
            email,
        }

        const createCustomer = await shopifyStore.customer.update(id,updateCustomer);
    
        return resp.send({ message: 'Customer updated successfully',createCustomer:createCustomer});
    } catch(error) {
        console.log(error.message);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;