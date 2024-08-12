import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken } from "../utils/generateTokens.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res, user._id);
    res.status(200).send(user);
  } else {
    res.status(404);
    throw new Error("invalid user");
  }
});

export const loggin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist && (await userExist.matchPassword(password))) {
    generateToken(res, userExist._id);
    res.status(200).send(userExist);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const loggout = asyncHandler(async (req, res) => {
  res
    .status(200)
    .cookie("uid", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send("loggout ");
});

export const getUser = asyncHandler(async (req, res) => {
  const user = req.user;
  res.status(200).send(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password;
    }
    const upUser = await user.save();
    res.status(200).send(upUser);
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});
