import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import createToken from "../utils/createToken.js";
import cloudinary from "cloudinary";

const patientRegister = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, nic, dob, gender, password } =
    req.body;
  if (
    [firstName, lastName, email, phone, nic, dob, gender, password].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ApiError(401, "Email already exists");
  }
  const user = new User({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    role: "Patient",
  });
  try {
    await user.save();
    createToken(user, "User Registered!", 200, res);
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  if ((!email || !password, role)) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "user not found");
  }

  const isPasswordvalid = await user.isPasswordCorrect(password);
  if (!isPasswordvalid) {
    throw new ApiError(401, "credentials Password");
  }
  if (role !== user.role) {
    throw new ApiError(401, "User Not Found With This Role!");
  }
  createToken(user, "User logged!", 200, res);
});

const createAdmin = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, nic, dob, gender, password } =
    req.body;
  if (
    [firstName, lastName, email, phone, nic, dob, gender, password].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const adminExists = await User.findOne({ email });
  if (adminExists) {
    throw new ApiError(401, "Admin With This Email Already Exists!");
  }

  const admin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    role: "Admin",
  });
  res.status(200).json({
    success: true,
    message: "New Admin Registered",
    admin,
  });
});

const addNewDoctor = asyncHandler(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    throw new ApiError(400, "image file is requied");
  }
  const { docAvatar } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(docAvatar.mimetype)) {
    throw new ApiError(
      400,
      " incorrect format for docAvatar in docAvatar file "
    );
  }
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    doctorDepartment,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !password ||
    !doctorDepartment ||
    !docAvatar.originalname.match(/\.(jpg|jpeg|png|gif)$/)
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ApiError(400, "doctor is already");
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    docAvatar.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    throw new ApiError("Failed to UploadDoctor Avatar To Cloudinary");
  }
  const doctor = await User.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    role: "Doctor",
    doctorDepartment,
    docAvatar: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "New Doctor Registered",
    doctor,
  });
});

const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await User.find({ role: "Doctor" });
  res.status(200).json({
    success: true,
    doctors,
  });
});

const getUserDetails = asyncHandler(async (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

// Logout function for dashboard admin
const logoutAdmin = asyncHandler(async (req, res) => {
  res
    .status(201)
    .cookie("adminToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Admin Logged Out Successfully.",
    });
});

// Logout function for frontend patient
const logoutPatient = asyncHandler(async (req, res) => {
  res
    .status(201)
    .cookie("patientToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Patient Logged Out Successfully.",
    });
});

export {
  patientRegister,
  login,
  createAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  logoutAdmin,
  logoutPatient,
};
