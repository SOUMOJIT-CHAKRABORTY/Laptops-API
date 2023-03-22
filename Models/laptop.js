const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
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
