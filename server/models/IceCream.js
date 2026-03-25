const mongoose = require("mongoose");

const IceCreamSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("IceCream", IceCreamSchema);