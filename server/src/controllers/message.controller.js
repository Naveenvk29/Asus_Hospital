import Message from "../models/message.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const sendMessage = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    throw new ApiError(400, "All fields are required");
  }
  const newMessage = await Message.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });
  res.status(201).json({
    message: "Message sent successfully",
    newMessage,
  });
});

const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({});
  if (!messages) {
    throw new ApiError(404, "No messages found");
  } else {
    res.status(200).json(messages);
  }
});

export { sendMessage, getMessages };
