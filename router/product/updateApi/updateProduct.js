const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateProduct/:id',async (req,resp) => {
    const productId = req.params.id;
    const {title, body_html, handle, vendor, product_type, status} = req.body;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        // const existingProduct = await shopifyStore.product.get(productId);

        const product = {
            title,
            body_html,
            handle,
            vendor,
            product_type,
            status
        }

        const updateProduct = await shopifyStore.product.update(productId,product)
        return resp.send({ message: 'Products Updated', product: updateProduct });
    } catch(error) {
        console.log(error)
        return resp.status(500).send({ message: 'Internal Server Error' });
        
    }
})

module.exports = router;