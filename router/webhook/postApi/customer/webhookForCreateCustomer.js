const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const schema = require('../../../../model/customerSchema');
require("dotenv").config();

router.post('/webhookForCreateCustomer',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let _webhook = {
            topic: "customers/create",
            address: `https://82b0-2401-4900-1c09-9072-ac2a-e1cc-f334-69a7.ngrok-free.app/api/customerCreate`,
            format: "json",
          };

        let getWebhook = await shopifyStore.webhook.create(_webhook);

        return resp.status(200).send({status: 'Success', message: 'Webhooks created successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

router.post('/customerCreate', async (req,res) => {
    try{

        const customerData = new schema({
            id: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone
        })

        customerData.save();

        console.log(req)
        res.status(200).send({status: 'Success', notification: 'Customer created'});
    } catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal server error'});
    }
})

module.exports = router;