import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = mongoose.Schema(
  {
    firstNam: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
      type: String,
      required: true,
      maxLength: 10,
      maxLength: 12,
    },
    nic: {
      type: String,
      required: true,
      maxLength: 12,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    appointmentDate: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    doctor: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    hasVisited: {
      type: Boolean,
      default: false,
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    patientId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamp: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
