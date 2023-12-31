const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.get('/searchCustomerWithLastNameAndSpecificFields',async (req,res) => {
    const {last_name,fields} = req.body;
    if(!last_name || !fields){
      return res.status(400).send({ status:'error', message: 'last_name or fields Not Found' })
  }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });

      const obj = {
        last_name,
        fields
      }

        let getCustomerAccLastName = await shopifyStore.customer.search(obj)
        
        return res.send({ message: 'Customer retrieved successfully', customerOrder: getCustomerAccLastName});
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;