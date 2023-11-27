const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerWithSpecificCountry',async (req,res) => {
    const {country} = req.body;
    if(!country){
        return res.status(400).send({ status:'error', message: 'country Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerAccCountry = await shopifyStore.customer.search({country: country})
        
        return res.send({ message: 'Customer retrieved successfully', customerOrder: getCustomerAccCountry});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;