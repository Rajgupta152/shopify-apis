const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createCustomerWithEmailReturnError',async (req,res) => {
    const {first_name, last_name, email } = req.body; 
    if(!first_name || !last_name  || !email ){
        
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
        }

        const createCustomer = await shopifyStore.customer.create(newCustomer);

        return res.status(200).send({status: "Success", message: 'Customer added successfully', createCustomer: createCustomer});
    } catch(error) {
        console.log(error);
        return res.status(422).send({errors: {phone: ["Email has alerady been taken"]} });
    }
})

module.exports = router;