const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/addMetafieldsToAnOrder/:id',async (req,res) => {
    const {id} = req.params;
    const {metafields} = req.body
    if(!metafields){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }

    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const updateOrder = await shopifyStore.order.update(id,{metafields: metafields});

        return res.status(200).send({status: "Success", message: 'Order Updated', updateOrder: updateOrder});
    } catch(error) {
        console.log(error);
        return res.status(500).send({message: "Internal server error"});
    }
})

module.exports = router;