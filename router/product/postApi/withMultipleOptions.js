//Not working
const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/withMultipleOptions',async (req,resp) => {
    const{title, body_html, vendor, product_type, status, variants, options} = req.body;
    
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });
        const newproduct = {
            title,
            body_html,
            vendor,
            product_type,
            status,
            variants,
            options
        }
        console.log(newproduct.options);
        const addProduct = await shopifyStore.product.create(newproduct)
        return resp.send({ message: 'Products Added successfully', product: addProduct });
    } catch(error) {
        console.log(error)
        return resp.status(500).send({ message: 'Internal Server Error' });
        
    }
})

module.exports = router;

