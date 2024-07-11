import express from "express";
import {
  patientRegister,
  login,
  createAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  logoutAdmin,
  logoutPatient,
} from "../controllers/user.controller.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

// patient routes
router.post("/patient/register", patientRegister);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);

// public
router.get("/doctors", getAllDoctors);

// admin routes
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, createAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;
