const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/cancelAndRefundOrderUsingRefund/:id',async (req,res) => {
    const {id} = req.params;
    const {body} = req.body;
    if(!body){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const canceledOrder = await shopifyStore.order.cancel(id,{body: body});

        return res.status(200).send({status: "Success", message: 'Order canceled', canceledOrder: canceledOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: "Internal server error"});
    }
})

module.exports = router;