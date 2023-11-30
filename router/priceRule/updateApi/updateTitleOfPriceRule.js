const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateTitleOfPriceRule/:id',async (req,res) => {
    const {title} = req.body;
    const {id} = req.params;
    if(!title){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'});
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const updatedPriceRule = await shopifyStore.priceRule.update(id, {title: title});
       
        return res.status(200).send({ status : 'success', message: 'Price rule updated', updatedPriceRule: updatedPriceRule });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


module.exports = router;