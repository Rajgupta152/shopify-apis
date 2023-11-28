const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/sendCustomizedInvite',async (req,res) => {
    const {id,customer_invite} = req.body;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const send_invite = await shopifyStore.customer.sendInvite(id,customer_invite);

        return res.status(200).send({status: 'Success', message: 'invite sent', send_invite: send_invite});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;