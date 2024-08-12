import express from "express";
import {
  loggin,
  registerUser,
  loggout,
  getUser,
  updateUser,
} from "../controller/userController.js";
import protect from "../middleware/authMiddle.js";

const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/log-in", loggin);
userRouter.post("/log-out", loggout);
userRouter.route("/profile").get(protect, getUser).put(protect, updateUser);

export default userRouter;
