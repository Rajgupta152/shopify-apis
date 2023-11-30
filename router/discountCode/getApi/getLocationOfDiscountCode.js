const express = require("express");                 //Not working
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/getLocationOfDiscountCode',async (req,res) => {
    const {code} = req.body;
    if(!code){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const discount = await shopifyStore.discountCode.lookup({code: code});
       
        return res.status(200).send({ status : 'success ', discount: discount });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;