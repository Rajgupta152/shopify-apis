const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getOrderLastUpdatedAfterSpecificDate',async (req,res) => {
    const {updated_at_min} = req.body;
    if(!updated_at_min){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let getOrder = await shopifyStore.order.list({updated_at_min: updated_at_min})

        return res.status(200).send({status: "Success", message: 'Order retrieved successfully', order: getOrder });
    } catch(error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;