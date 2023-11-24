const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateProductTitle/:id',async (req,resp) => {
    const productId = req.params.id;
    const {title} = req.body;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });


        const product = {
            title
        }

        const updateTitle = await shopifyStore.product.update(productId,product)
        return resp.status(200).send({status: "success", message: 'Products Updated', product: updateTitle});
    } catch(error) {
        console.log(error)
        return resp.status(500).send({ message: 'Internal Server Error' });
        
    }
})

module.exports = router;