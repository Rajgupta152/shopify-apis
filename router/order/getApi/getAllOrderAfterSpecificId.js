const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getAllOrdersAfterSpecificId',async (req,res) => {
    const {since_id} = req.body;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getOrder = await shopifyStore.order.list({since_id: since_id})

        return res.send({ message: 'Products retrieved successfully', order: getOrder });
    } catch(error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;