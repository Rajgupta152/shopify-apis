const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.put('/updateProduct/:id',async (req,resp) => {
    const productId = req.params.id;
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const existingProduct = await shopifyStore.product.get(productId);

        const product = {
            title : "HP Laptop",
            body_html : "<strong>Good snowboard!</strong>",
            handle: "HP Laptop",
            vendor : existingProduct.vendor,
            product_type : existingProduct.product_type,
            status : existingProduct.status,
        }

        const updateProduct = await shopifyStore.product.update(productId,product)
        return resp.send({ message: 'Products Updated', product: updateProduct });
    } catch(error) {
        // return resp.status(500).send({ message: 'Internal Server Error' });
        console.log(error)
    }
})

module.exports = router;