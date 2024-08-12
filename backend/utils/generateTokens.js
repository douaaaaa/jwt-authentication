import jwt from "jsonwebtoken";

export const generateToken = (res, uid) => {
  const token = jwt.sign({ id: uid }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("uid", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};
