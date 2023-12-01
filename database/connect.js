const mongoose = require("mongoose");

//Connect to database
exports.connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1/Webhook")
    .then(() => console.log("Connected to db"))
    .catch((err) => console.log("Connection failed"));
};
