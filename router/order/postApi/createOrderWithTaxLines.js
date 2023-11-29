const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createOrderWithTaxLines',async (req,res) => {
    const {line_items, tax_lines, total_tax} = req.body;
    if(!line_items || !tax_lines || !total_tax){
        return res.status(422).send({ status:'error', message: 'Unprocessable Entity'})
    }
    try{
        const shopifyStore = new shopify({
            shopName: process.env.SHOPNAME,
            accessToken: process.env.ACCESSTOKEN,
            apiVersion: process.env.APIVERSION
        });
        const obj = {
            line_items,
            tax_lines,
            total_tax
        }

        const createOrder = await shopifyStore.order.create(obj);

        return res.status(200).send({status: "Success", message: 'Order created successfully', createOrder: createOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;