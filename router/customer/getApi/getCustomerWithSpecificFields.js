const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getCustomerWithSpecificFields',async (req,res) => {
    const {fields} = req.body;
    if(!fields){
        return res.status(400).send({ status:'error', message: 'fields Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomer = await shopifyStore.customer.list({fields: fields});
        
        
        return res.status(200).send({status: 'Sucess', message: 'Customer retrieved successfully', customer: getCustomer});
    } catch(error) {
        console.log(error)
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;