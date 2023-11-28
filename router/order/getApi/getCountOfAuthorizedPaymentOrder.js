const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getCountOfAuthorizedPaymentOrder',async (req,res) => {
    const {financial_status} = req.body;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getOrder = await shopifyStore.order.count({financial_status: financial_status})

        return res.status(200).send({status: "Success", message: 'Order count retrieved successfully', order: getOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;