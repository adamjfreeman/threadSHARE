const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  customText: {
    type: String,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
