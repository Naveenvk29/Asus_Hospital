import express from "express";
import {
  appointmentRegistration,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment.controller.js";

import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/post", authenticate, appointmentRegistration);
// admin routes
router.get("/getall", authenticate, getAllAppointments);
router.put("/update/:id", authenticate, updateAppointmentStatus);
router.delete("/delete/:id", authenticate, deleteAppointment);

export default router;
