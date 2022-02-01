import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel";
import generateToken from "../utils/generateToken";

//@desc         Get products
//@route        GET /api/products
//@access       Public
const getProducts = asyncHandler(async (req: any, res: any) => {
  const products = await Product.find({});
  console.log(products);
  res.json({ products });
});

//@desc         Get product
//@route        GET /api/products/:id
//@access       Public
const getProduct = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;

  const product = await Product.findOne({
    _id: id,
  });

  if (product) {
    res.json({ product });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc         Create a new review
//@route        POST /api/products/:id/review
//@access       Private
const createProductReview = asyncHandler(async (req: any, res: any) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review Added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc         Create product
//@route        POST /api/products
//@access       Public
const createProduct = asyncHandler(async (req: any, res: any) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    numReviews,
    description,
  } = req.body;
  const { _id } = req.user;

  const newProduct = new Product({
    name,
    price,
    user: _id,
    image,
    brand,
    category,
    countInStock,
    numReviews,
    description,
  });

  const createdProduct = await newProduct.save();
  res.status(201).json(createdProduct);
});

export { getProducts, getProduct, createProduct, createProductReview };
