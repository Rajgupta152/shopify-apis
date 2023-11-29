const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createSimpleOrderWithFullfillment',async (req,res) => {
    const {email, fulfillment_status, fulfillments, line_items} = req.body;
    if(!email  || !fulfillment_status  || !fulfillments || !line_items ){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });
        const obj = {
            email ,
            fulfillment_status ,
            fulfillments, 
            line_items 
        }

        const createOrder = await shopifyStore.order.create(obj);

        return res.status(200).send({status: "Success", message: 'Order created successfully', createOrder: createOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;