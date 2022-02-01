import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import path from "path";
import connectDB from "./config/db";

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

const app = express();
dotenv.config();
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const MODE = process.env.NODE_ENV;

const PORT = process.env.PORT || 10100;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error("Not found");
  res.status(404);
  next(error);
});

app.listen(PORT, () =>
  console.log(
    colors.yellow.bold(`Server Running on port ${PORT} in ${MODE} mode.`)
  )
);
