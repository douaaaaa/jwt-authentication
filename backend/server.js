import express from "express";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 8001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`the server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
