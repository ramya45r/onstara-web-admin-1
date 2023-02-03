const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Post Category is required"],
    },

    description: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://images.pexels.com/photos/13862516/pexels-photo-13862516.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//compile
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
