const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getSpecificOrderWithCertainFields/:id',async (req,res) => {
    const {id} = req.params;
    const {fields} = req.body
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getOrder = await shopifyStore.order.get(id,{fields: fields})

        return res.status(200).send({status: "Success", message: 'Order retrieved successfully', order: getOrder });
    } catch(error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;