const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.delete('/deleteCustomer/:id',async (req,res) => {
    const id = req.params.id;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        await shopifyStore.customer.delete(id);
    
        return res.status(200).send({ status: "Success", message: 'Customer deleted successfully'});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;