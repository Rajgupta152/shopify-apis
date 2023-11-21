const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.delete('/deleteCustomer/:id',async (req,resp) => {
    const id = req.params.id;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const deletedCustomer = await shopifyStore.customer.delete(id);
    
        return resp.send({ message: 'Customer deleted successfully',deletedCustomer:deletedCustomer});
    } catch(error) {
        console.log(error.message);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;