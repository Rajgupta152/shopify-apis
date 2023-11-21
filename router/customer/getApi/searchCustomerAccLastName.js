const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerAccLastName',async (req,resp) => {
    const lastName = req.body.last_name;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerAccLastName = await shopifyStore.customer.search({last_name: lastName})
        
        return resp.send({ message: 'Customer retrieved successfully', customerOrder: getCustomerAccLastName});
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;