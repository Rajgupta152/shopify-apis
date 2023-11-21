const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createProduct',async (req,resp) => {
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });
        const newproduct = {
            title : "Burton Custom Freestyle 151",
            body_html : "<strong>Good snowboard!</strong>",
            vendor : "Burton",
            product_type : "Snowboard",
            status : "draft",
        }

        const addProduct = await shopifyStore.product.create(newproduct)
        return resp.send({ message: 'Products Added successfully', product: addProduct });
    } catch(error) {
        // return resp.status(500).send({ message: 'Internal Server Error' });
        console.log(error)
    }
})

module.exports = router;