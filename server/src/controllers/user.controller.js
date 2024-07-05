import { ApiError } from "../utils/ApiError.js";
import createToken from "../utils/createToken.js";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const patientRegister = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, nic, dob, gender, password } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !password
  ) {
    throw new ApiError(401, "please fill all required fields");
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
    createToken(res, user._id);

    res.status(201).json({
      user,
      message: "Patient registered successfully",
    });
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

const addnewDoctor = asyncHandler(async (req, res) => {
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
    docAvatar,
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
    !docAvatar
  ) {
    throw new ApiError(401, "Please fill all required fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ApiError(401, "Email already exists");
  }
  const doctor = new User({
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
    docAvatar,
  });
  try {
    await doctor.save();
    createToken(res, doctor._id);
    res.status(201).json({
      doctor,
      message: "Doctor registered successfully",
    });
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    throw new ApiError(400, "Please fill all required fields");
  }
  const user = await User.findOne({ email });
  if (user) {
    if (user.role === role) {
      if (user.isPasswordCorrect(password)) {
        createToken(res, user._id);

        res.status(201).json({
          user,
          message: "Logged in successfully",
        });
      } else {
        throw new ApiError(401, "Invalid password");
      }
    } else {
      throw new ApiError(401, "Invalid role");
    }
  } else {
    throw new ApiError(401, "User not found");
  }
});

const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await User.find({ role: "Doctor" });
  if (!doctors) {
    throw new ApiError(404, "No doctors found");
  } else {
    res.status(201).json({ doctors });
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(401, "User not found");
  }
  res.status(201).json({ user });
});

const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

export {
  patientRegister,
  addnewDoctor,
  login,
  getAllDoctors,
  getUserProfile,
  logout,
};
