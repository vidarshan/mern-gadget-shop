import express, { Router } from "express";
const router = express.Router();

import { createProduct, getProducts } from "../controllers/productControllers";
import { protect } from "../middleware/authMiddleware";

router.route("/").get(getProducts).post(protect, createProduct);
// router.route("/").post(registerUser);

export default router;
