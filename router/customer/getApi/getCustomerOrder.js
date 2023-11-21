const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/customerOrder/:id',async (req,resp) => {
    const id = req.params.id
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getCustomerOrder = await shopifyStore.customer.orders(id)
        
        return resp.send({ message: 'Customer order retrieved successfully', customerOrder: getCustomerOrder });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;