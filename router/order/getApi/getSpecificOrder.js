const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getSpecificOrder/:id',async (req,res) => {
    const {id} = req.params;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getOrder = await shopifyStore.order.get(id)

        return res.status(200).send({status: "Success", message: 'Order retrieved successfully', order: getOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;