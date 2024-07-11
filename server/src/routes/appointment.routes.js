import express from "express";
import {
  createNewAppointments,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment.controller.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/new", createNewAppointments);

router.get("/getall", isAdminAuthenticated, getAllAppointments);

router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);

router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;
