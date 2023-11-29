const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/reOpenAClosedOrder/:id',async (req,res) => {
    const {id} = req.params;

    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const openOrder = await shopifyStore.order.open(id);

        return res.status(200).send({status: "Success", message: 'Order Open', openOrder: openOrder});
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: "Internal server error"});
    }
})

module.exports = router;