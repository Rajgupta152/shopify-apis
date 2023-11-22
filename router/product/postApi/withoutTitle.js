
const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/withoutTitleRetunError',async (req,resp) => {
    const{ body_html} = req.body;
    
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const newproduct = {
            body_html,
        }
        console.log(newproduct);
        const addProduct = await shopifyStore.product.create(newproduct)
        return resp.status(200).send({status:'Success', message: 'Products Added successfully', product: addProduct });
    } catch(error) {
        console.log(error)
        return resp.status(422).send({error: {"title" : ["can't be blank"]}});        
    }
})

module.exports = router;