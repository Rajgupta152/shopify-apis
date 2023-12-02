const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const schema = require('../../../../model/customerSchema');
require("dotenv").config();

router.post('/webhookForCustomerDelete',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let _webhook = {
            topic: "customers/delete",
            address: `https://82b0-2401-4900-1c09-9072-ac2a-e1cc-f334-69a7.ngrok-free.app/api/deleteCustomer`,
            format: "json",
          };

        let getWebhook = await shopifyStore.webhook.create(_webhook);

        return resp.status(200).send({status: 'Success', message: 'Webhooks created successfully', webhook: getWebhook });
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

router.post('/deleteCustomer', async(req,res) => {
    try{
        const id = req.id;
        console.log(id)
        await schema.findByIdAndDelete({id: id});

        console.log(req);
        console.log(id);
        res.status(200).send({status: 'Success', message: 'customer deleted'})
    } catch(err){
        console.log(err);
        res.status(500).send({error: 'Internal server error'});
    }
})

module.exports = router;