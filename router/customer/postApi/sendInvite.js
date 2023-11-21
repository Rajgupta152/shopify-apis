const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/send_invite',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });
        const id = 7826615370020;

        const send_invite = await shopifyStore.customer.sendInvite(id,{
            body: 
            {"customer_invite": 
            {"to": "kshitijgupta2907@gmail.com", 
            "from": "kshitij.anncode@gmail.com", 
            "bcc": ["kshitij.anncode@gmail.com"], 
            "subject": "Welcome to my new shop", 
            "custom_message": "My awesome new store"}
           }
        });

        return resp.send({ message: 'invite sent', send_invite: send_invite});
    } catch(error) {
        console.log(error.message);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;