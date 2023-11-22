
const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/withProductTag',async (req,resp) => {
    const{title, body_html, vendor, product_type, tags} = req.body;
    
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
            tags
        }
        console.log(newproduct);
        const addProduct = await shopifyStore.product.create(newproduct)
        return resp.status(200).send({status:'Success', message: 'Products Added successfully', product: addProduct });
    } catch(error) {
        console.log(error)
        return resp.status(500).send({ message: 'Internal Server Error' });
        
    }
})

module.exports = router;