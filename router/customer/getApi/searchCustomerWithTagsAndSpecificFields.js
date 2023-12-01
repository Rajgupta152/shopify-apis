const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerWithTagsAndSpecificFields',async (req,res) => {
    const {tag,fields} = req.body;
    if(!tag || !fields){
      return res.status(400).send({ status:'error', message: 'tag or fields Not Found' })
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

      const obj = {
        tag,
        fields
      }

        let getCustomerAccTags = await shopifyStore.customer.search(obj)      
        return res.send({ message: 'Customer retrieved successfully', getCustomerAccTags: getCustomerAccTags});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})


// .....demo

router.get('/searchCustomerWithTagsAndSpecificFields1',async (req,res) => {
  const {tags,fields} = req.body;
  if(!tags || !fields){
    return res.status(400).send({ status:'error', message: 'tag or fields Not Found' })
  }
  try{
      const shopifyStore = new shopify({
          shopName: "edge-entity.myshopify.com",
          accessToken: "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",
          apiVersion: process.env.APIVERSION
      });

    const obj = {
      tags,
      fields
    }

      let getCustomerAccTags = await shopifyStore.customer.search(obj)      
      return res.send({ message: 'Customer retrieved successfully', getCustomerAccTags: getCustomerAccTags});
  } catch(error) {
      console.log(error);
      return res.status(500).send({ message: 'Internal Server Error' });
  }
})

module.exports = router;