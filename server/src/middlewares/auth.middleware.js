import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

// Middleware to authenticate dashboard users
export const isAdminAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) {
    throw new ApiError(400, "Dashboard User is not authenticated!");
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Admin") {
    throw new ApiError(
      400,
      `${req.user.role} not authorized for this resource!`
    );
  }
  next();
});

// Middleware to authenticate frontend users
export const isPatientAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.patientToken;
  if (!token) {
    throw new ApiError(400, "User is not authenticated!");
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Patient") {
    throw new ApiError(
      404,
      `${req.user.role} not authorized for this resource!`
    );
  }
  next();
});

export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `${req.user.role} not allowed to access this resource!`
        )
      );
    }
    next();
  };
};
