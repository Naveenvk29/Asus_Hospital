import express from "express";
import {
  sendMessage,
  getAllmessages,
} from "../Controllers/message.controller.js";

const router = express.Router();

router.route("/send").post(sendMessage);

router.route("/getall").get(getAllmessages);

export default router;
