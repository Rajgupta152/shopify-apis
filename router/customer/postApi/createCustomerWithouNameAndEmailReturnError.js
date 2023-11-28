const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createCustomerWithoutNameAndEmailReturnError',async (req,res) => {
    const {first_name, last_name, email } = req.body; 
    if(!first_name || !last_name  || !email ){
        
        return res.status(422).send({errors: {base: ["Customer must have a name or email address"]} });
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
        }

        const createCustomer = await shopifyStore.customer.create(newCustomer);

        return res.status(200).send({status: "Success", message: 'Customer added successfully', createCustomer: createCustomer});
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: 'Internal server error'});
    }
})

module.exports = router;