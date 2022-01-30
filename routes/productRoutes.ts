import express, { Router } from "express";
const router = express.Router();

import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/productControllers";
import { protect } from "../middleware/authMiddleware";

router.route("/").get(getProducts).post(protect, createProduct);
router.route("/:id").get(getProduct);

export default router;
