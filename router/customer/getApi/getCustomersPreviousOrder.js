const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getCustomersPreviousOrder',async (req,res) => {
    const {id,status} = req.body
    if(!id || !status){
        return res.status(400).send({ status:'error', message: 'id or status Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });
        

        let getCustomerOrder = await shopifyStore.customer.orders(id,status)
        
        return res.status(200).send({status: 'Success', message: 'Customer order retrieved successfully', customerOrder: getCustomerOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;