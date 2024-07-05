import Message from "../models/message.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const sendMessage = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
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
  res.json(messages);
});

export { sendMessage, getMessages };
