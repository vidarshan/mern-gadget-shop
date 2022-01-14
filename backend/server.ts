import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const MODE = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

dotenv.config();

app.listen(PORT, () =>
  console.log(
    colors.yellow.bold(`Server Running on port ${PORT} in ${MODE} mode.`)
  )
);
