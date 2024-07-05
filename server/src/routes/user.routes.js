import express from "express";
import {
  patientRegister,
  addnewDoctor,
  login,
  getAllDoctors,
  getUserProfile,
  logout,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const router = express.Router();

// patient
router.route("/patient/register").post(patientRegister);
router.get("/patient/me", authenticate, getUserProfile);

// doctors
router.route("/doctor/addnew").post(addnewDoctor);
router.get("/doctors", getAllDoctors);

//commen routes
router.route("/auth").post(login);
router.post("/logout", authenticate, logout);
export default router;
