const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createCustomerWithMetafield',async (req,res) => {
    const {first_name, last_name, email, phone, verified_email, addresses, metafields } = req.body; 
    if(!first_name || !last_name || !email || !phone || !verified_email || !addresses || !metafields){
        
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const newCustomer = {
            first_name,
            last_name,
            email,
            phone,
            verified_email,
            addresses,
            metafields 
        }

        const createCustomer = await shopifyStore.customer.create(newCustomer);

        return res.status(200).send({status: "Success", message: 'Customer added successfully', createCustomer: createCustomer});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;