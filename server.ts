import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import path from "path";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const MODE = process.env.NODE_ENV;

const PORT = process.env.PORT || 10100;

dotenv.config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, () =>
  console.log(
    colors.yellow.bold(`Server Running on port ${PORT} in ${MODE} mode.`)
  )
);
