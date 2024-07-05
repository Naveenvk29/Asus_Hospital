import Appointment from "../models/appointment.model.js";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const appointmentRegistration = asyncHandler(async (req, res) => {
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
    throw new Error("please fill the required fields");
  }

  const doctor = await User.find({
    firstName: doctor_firstName,
    lastName: doctor_lastName,
    role: "Doctor",
    doctorDepartment: department,
  });
  if (doctor.length === 0) {
    throw new ApiError(404, "Doctor not found");
  }
  if (doctor.length > 1) {
    throw new ApiError(
      409,
      "Doctors Conflict! Please Contact Through Email Or Phone!"
    );
  }
  const doctorId = doctor[0]._id;
  const PatientId = req.user._id;
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
  res.status(201).json({
    appointment,
    message: "Appointment registered successfully",
  });
});

const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({});
  if (!appointments) {
    throw new ApiError(404, "No appointments found");
  } else {
    res.status(200).json(appointments);
  }
});
const updateAppointmentStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ApiError("Appointment not found!", 404));
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

const deleteAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return next(new ApiError(404, "Appointment not found!"));
  }
  await appointment.deleteOne();
  res.status(200).json({
    message: "Appointment deleted!",
  });
});

export {
  appointmentRegistration,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
};
