const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/sendInviteEmail',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const {first_name, last_name, email} = req.body; 

        let newCustomer = {
            first_name,
            last_name,
            email,
            verified_email:true,
            send_email_invite :true
        }

        const sendInviteEmail = await shopifyStore.customer.create(newCustomer);

        return resp.send({ message: 'Customer added successfully', sendInviteEmail: sendInviteEmail});
    } catch(error) {
        console.log(error);
        return resp.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;