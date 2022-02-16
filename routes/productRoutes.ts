import express, { Router } from "express";
const router = express.Router();

import {
  createProduct,
  getProduct,
  getProducts,
  createProductReview,
  getTopProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductsForSearch,
} from "../controllers/productControllers";
import { admin, protect } from "../middleware/authMiddleware";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/search").get(getProductsForSearch);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
