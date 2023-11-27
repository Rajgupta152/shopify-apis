const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerWithVerifiedEmail',async (req,res) => {
    const {verified_email,fields} = req.body;
    if(!verified_email || !fields){
      return res.status(400).send({ status:'error', message: 'verified_email or fields Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

      const obj = {
        verified_email,
        fields
      }

        let getCustomerAccTags = await shopifyStore.customer.search(obj)      
        return res.status(200).send({status: 'Success', message: 'Customer retrieved successfully', customerOrder: getCustomerAccTags});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;