import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { isAdminAuthenticated } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getMessages);
export default router;
