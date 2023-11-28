const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createCustomerWithActivationUrlReturnError/:id',async (req,res) => {
    const {id} = req.params; 

    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const accountActivationUrl = await shopifyStore.customer.accountActivationUrl(id);

        return res.status(200).send({status: "Success", accountActivationUrl: accountActivationUrl});
    } catch(error) {
        console.log(error);
        return res.status(422).send({errors: [
            "account already enabled"
          ]});
    }
})

module.exports = router;