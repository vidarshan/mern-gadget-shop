import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel";
import generateToken from "../utils/generateToken";

//@desc         Get products
//@route        GET /api/products
//@access       Public
const getProducts = asyncHandler(async (req: any, res: any) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//@desc         Get products for search
//@route        GET /api/products/search
//@access       Public
const getProductsForSearch = asyncHandler(async (req: any, res: any) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });

  const formattedProducts = [];

  products.map((product: any) => {
    formattedProducts.push({
      value: product._id,
      label: product.name,
      group: product.category,
      image: product.image,
    });
  });

  res.json(formattedProducts);
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

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req: any, res: any) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(4);

  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req: any, res: any) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req: any, res: any) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req: any, res: any) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProduct,
  getProductsForSearch,
  createProduct,
  createProductReview,
  getTopProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
