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

        let countWebhook = await shopifyStore.webhook.update({id: id});

        return res.status(200).send({status: 'Success', message: 'Count of webhooks retrieved successfully', count: countWebhook });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;