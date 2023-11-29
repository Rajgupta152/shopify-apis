const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");

router.post('/createPartiallyPaidOrderWithNewCustomer',async (req,res) => {
    const {line_items, customer, billing_address , shipping_address, email,  transactions, financial_status  } = req.body;
    if(!line_items || !transactions || !customer || !billing_address || !shipping_address || !email || !financial_status  ){
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
            customer,
            billing_address,
            shipping_address,
            email,
            transactions,
            financial_status
        }

        let getOrder = await shopifyStore.order.create(obj);

        return res.status(200).send({status: "Success", message: 'Order created successfully', order: getOrder });
    } catch(error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router;