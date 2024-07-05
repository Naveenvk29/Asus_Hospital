import jwt from "jsonwebtoken";

const generateToken = (req, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  req.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });
  return token;
};

export default generateToken;
