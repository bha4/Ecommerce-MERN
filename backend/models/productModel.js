const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name!.."],
    trim: true,
    maxLength: [100, "product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "please enter product description!.."],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter product category!.."],
    enum: {
      values: [
        "Electronics",
        "Mobile Phones",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Clothes/Shoes",
        "Sports",
        "Outdoor",
        "Home",
        "Books",
        "Health/Beauty",
      ],
      message: "please select correct catagory",
    },
  },
  seller: {
    type: String,
    required: [true, "please enter product seller!.."],
  },
  stock: {
    type: Number,
    required: [true, "please enter product Stocks!.."],
    maxLength: [20, "product Stock cannot exceed 20"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

let schema = mongoose.model("Product",productSchema);

module.exports = schema;