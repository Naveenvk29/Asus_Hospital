import mongoose, { Model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
      type: String,
      required: true,
      maxLength: 10,
    },
    nic: {
      type: String,
      required: true,
      validate: [
        validator.isLength({ min: 9, max: 10 }),
        "Provide a valid NIC!",
      ],
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["Admin", "Doctor", "Patient"],
    },
    doctorDepartment: {
      type: String,
    },
    docAvatar: {
      public_id: String,
      url: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.Model("User", userSchema);
