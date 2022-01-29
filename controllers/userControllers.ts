import asyncHandler from "express-async-handler";
import User from "../models/UserModel";
import generateToken from "../utils/generateToken";
import { Request, Response, NextFunction } from "express";

//@desc         Auth user & get a token
//@route        POST /api/user/login
//@access       Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc         get User profile
//@route        GET /api/user/profile
//@access       Public
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found...");
  }
});

//@desc         Register a new user
//@route        POST /api/user
//@access       Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

export { authUser, getUserProfile, registerUser };
