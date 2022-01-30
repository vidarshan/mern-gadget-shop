import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel";
import generateToken from "../utils/generateToken";

//@desc         Get products
//@route        GET /api/products
//@access       Public
const getProducts = asyncHandler(async (req: any, res: any) => {
  const products = await Product.find({});

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

//@desc         Create product
//@route        POST /api/products
//@access       Public
const createProduct = asyncHandler(async (req: any, res: any) => {
  console.log(req);

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

export { getProducts, getProduct, createProduct };
