const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.delete('/deleteProduct/:id',async (req,resp) => {
    const productId = req.params.id;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const deleteProduct = await shopifyStore.product.delete(productId);
        return resp.status(200).send({ status: "Success", message: 'Products Deleted', product: deleteProduct });
    } catch(error) {
        console.log(error)
        return resp.status(500).send({ message: 'Internal Server Error' });
       
    }
})

module.exports = router;