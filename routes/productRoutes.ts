import express, { Router } from "express";
const router = express.Router();

import {
  createProduct,
  getProduct,
  getProducts,
  createProductReview,
} from "../controllers/productControllers";
import { protect } from "../middleware/authMiddleware";

router.route("/").get(getProducts).post(protect, createProduct);
router.route("/:id").get(getProduct);
router.route("/:id/review").post(protect, createProductReview);

export default router;
