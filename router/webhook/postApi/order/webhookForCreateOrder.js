const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const orderSchema = require('../../../../model/orderSchema')
require("dotenv").config();

router.post('/webhookForCreateOrder',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let _webhook = {
            topic: "orders/create",
            address: `https://8bce-2401-4900-1c09-9072-3942-c3e4-c10e-8fab.ngrok-free.app/api/createOrder`,
            format: "json",
          };

        let getWebhook = await shopifyStore.webhook.create(_webhook);

        return resp.status(200).send({status: 'Success', message: 'Webhooks created successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

router.post('/createOrder', async (req,res) => {
    try{

        const order = new orderSchema({
            id: req.body.id,
            total_price: req.body.total_price,
            email: req.body.email,
            phone: req.body.phone,
            billing_address: req.body.billing_address,
            created_at: req.body.created_at
        })

        order.save();

        console.log(req)
        res.status(200).send({status: 'Success', notification: 'Order created',order: order});
    } catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal server error'});
    }
})

module.exports = router;