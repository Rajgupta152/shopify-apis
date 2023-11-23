const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/clearingProductImage/:id',async (req,resp) => {
    const productId = req.params.id;
    const {images} = req.body;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        // const existingProduct = await shopifyStore.product.get(productId);

        const product = {
            images  
        }

        const clearingProductImage = await shopifyStore.product.update(productId,product)
        return resp.status(200).send({status: "success", message: 'Products Updated', product: clearingProductImage});
    } catch(error) {
        console.log(error)
        return resp.status(500).send({ message: 'Internal Server Error' });
        
    }
})

module.exports = router;