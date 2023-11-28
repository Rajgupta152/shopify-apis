const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateCustomersDetails/:id',async (req,res) => {
    const {id} = req.params;
    const {email, note} = req.body;
    if(!email || !note){
        res.status(422).send({message: "Unaccessible Entity"});
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const obj = {
            email,
            note
        }

        const updatedCustomer = await shopifyStore.customer.update(id,obj);
    
        return res.status(200).send({status: 'Success', message: 'Customer updated successfully',updatedCustomer:updatedCustomer});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;