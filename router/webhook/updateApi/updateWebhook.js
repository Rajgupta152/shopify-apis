const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
require("dotenv").config();

router.put('/updateWebhook/:id',async (req,res) => {
 
    const {id} = req.params;
    const {address} = req.body;
    if(!address){
        res.status(422).send({error: "Unprocessible Entity"});
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        let updatedWebhook = await shopifyStore.webhook.update(id,{address: address});

        return res.status(200).send({status: 'Success', message: 'Webhooks updated successfully', updatedWebhook: updatedWebhook });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;