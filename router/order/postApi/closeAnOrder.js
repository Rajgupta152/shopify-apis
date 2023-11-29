const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/closeAnOrder/:id',async (req,res) => {
    const {id} = req.params;

    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const closedOrder = await shopifyStore.order.close(id);

        return res.status(200).send({status: "Success", message: 'Order closed', closedOrder: closedOrder});
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: "Internal server error"});
    }
})

module.exports = router;