const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateCustomersMarketingOptInState/:id',async (req,res) => {
    const {id} = req.params;
    const {accepts_marketing, accepts_marketing_updated_at, marketing_opt_in_level} = req.body;
    if(!id || !accepts_marketing || !accepts_marketing_updated_at || !marketing_opt_in_level){
        res.status(400).send({message: "Unaccessible Entity"});
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const obj = {
            accepts_marketing,
            accepts_marketing_updated_at,
            marketing_opt_in_level
        }

        const updatedCustomer = await shopifyStore.customer.update(id,obj);
    
        return res.status(200).send({status: 'Success', message: 'Customer updated successfully',updatedCustomer:updatedCustomer});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;