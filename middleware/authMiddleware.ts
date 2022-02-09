import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/UserModel";

const protect = asyncHandler(async (req: any, res: any, next: any) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token error");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized. No token available");
  }
});

export { protect };
