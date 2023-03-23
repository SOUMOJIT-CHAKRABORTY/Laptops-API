const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  //add a new value to the database
  modelName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("laptop", laptopSchema);
