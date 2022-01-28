import express, { Router } from "express";
const router = express.Router();

import {
  registerUser,
  authUser,
  getUserProfile,
} from "../controllers/userControllers";

router.post("/login", authUser);
router.route("/").post(registerUser);

export default router;
