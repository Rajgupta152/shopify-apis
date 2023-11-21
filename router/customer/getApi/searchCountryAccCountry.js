const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerAccCountry',async (req,resp) => {
    const country = req.body.country;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerAccCountry = await shopifyStore.customer.search({country: country,  fields: "id, email, first_name, last_name, verified_email"})
        
        return resp.send({ message: 'Customer retrieved successfully', customerOrder: getCustomerAccCountry});
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;