import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import { connectAuthdb } from "../config/db.js";

const authConn = connectAuthdb();
const User = UserModel(authConn);

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // console.log("hello");
      
      token = req.headers.authorization.split(' ')[1];
      // console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      // console.log("verified successfully  ", decoded);
      // console.log("hello",User.findById(decoded.id));

      
      
      req.user = await User.findById(decoded.id).select("-password"); // Attach user to request
      // console.log(req.user);
      
      next();
    } catch (error) {
      // console.log("hello");
      
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    // console.log("hello");
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};


