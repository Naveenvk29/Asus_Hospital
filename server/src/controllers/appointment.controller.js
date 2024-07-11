import Appointment from "../models/appoinment.model.js";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

// create a new Appointment
const createNewAppointments = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
    address,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !doctor_firstName ||
    !doctor_lastName ||
    !address
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const isConflict = await User.find({
    firstName: doctor_firstName,
    lastName: doctor_lastName,
    role: "Doctor",
    doctorDepartment: department,
  });
  if (isConflict.length === 0) {
    throw new ApiError(400, "Doctor Not Found!");
  }

  if (isConflict.length > 1) {
    throw new ApiError(
      400,
      "Doctors Conflict! Please Contact Through Email Or Phone!"
    );
  }
  const doctorId = isConflict[0]._id;
  const patientId = req.user._id;
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor: {
      firstName: doctor_firstName,
      lastName: doctor_lastName,
    },
    hasVisited,
    address,
    doctorId,
    patientId,
  });
  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment Send!",
  });
});

// get All Appointments

const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({});
  if (!appointments) {
    throw new ApiError(404, "No appointments found");
  } else {
    res.status(200).json(appointments);
  }
});

// update Status of Appointments

const updateAppointmentStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ErrorHandler("Appointment not found!", 404));
  }
  appointment = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Appointment Status Updated!",
  });
});

// delete Appointment

const deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  if (!appointment) {
    throw new ApiError(404, "Appointment not found");
  } else {
    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  }
});

export {
  createNewAppointments,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
};
