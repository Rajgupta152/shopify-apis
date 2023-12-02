const express = require("express");
const router = express.Router();
const shopify = require("shopify-api-node");
const schema = require("../../../../model/customerSchema");
const { ObjectId } = require("mongoose").Types;
require("dotenv").config();

//creating web hook
router.post("/webhookForUpdateCustomer", async (req, resp) => {
  try {
    const shopifyStore = new shopify({
      shopName: process.env.SHOPNAME,
      accessToken: process.env.ACCESSTOKEN,
      apiVersion: process.env.APIVERSION,
    });

    let _webhook = {
      topic: "customers/update",
      address: `https://8bce-2401-4900-1c09-9072-3942-c3e4-c10e-8fab.ngrok-free.app/api/updateCustomer`,
      format: "json",
    };

    let getWebhook = await shopifyStore.webhook.create(_webhook);

    return resp.status(200).send({
      status: "Success",
      message: "Webhooks created successfully",
      webhook: getWebhook,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({ message: "Internal Server Error" });
  }
});


// update customer if id found in db else create customer
router.post("/updateCustomer", async (req, res) => {

  try {
    const id = req.body.id;
    const updateCustomer = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      created_at: req.body.created_at,
    };

    const updatedCustomer = await schema.findOneAndUpdate({ id: id },updateCustomer,{ new: true, upsert: true });
    console.log("updated customer", updatedCustomer);

    console.log(req.body);
    res.status(200).send({ status: "Success", notification: "Customer updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

// router.get('/updateCustomer',async(req,res) => {
//     const id = req.body.id;

//     const searchId =  await schema.find({id: id});
//     console.log(searchId);
//     console.log(id)
// })

module.exports = router;
