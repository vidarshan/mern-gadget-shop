import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel";
import generateToken from "../utils/generateToken";

//@desc         Get products
//@route        GET /api/products
//@access       Public
const getProducts = asyncHandler(async (req: any, res: any) => {
  console.log(req.body);

  const products = await Product.find({});

  res.json({ products });
});
