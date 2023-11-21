const express = require("express");
const router = express.Router();
const Shopify = require("shopify-api-node");

router.get('/create',async (req,resp) => {

    const newCollectionData = {
        title: 'Assessories',
        body_html: '<p>This is a description for the Assessorie collection.</p>',
        published: true,
        image: {
          src: 'https://www.shutterstock.com/shutterstock/photos/599668508/display_1500/stock-vector-accessories-vector-banner-design-concept-flat-style-with-thin-line-art-icons-on-white-background-599668508.jpg',
        }
    }

    try{
        const shopifyStore = new Shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

        const collections = await shopifyStore.customCollection.create(newCollectionData);
        resp.send({message: 'Collection created',collection: collections});
    } catch(error){
        console.log(error);
    }

})

module.exports = router;