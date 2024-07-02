import Message from "../Models/message.model.js";
import asyncHandler from "../Utils/asyncHandler.js";

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
    data: newMessage,
  });
});

const getAllmessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    throw new Error(error.message, "some thing went wrong");
  }
});

export { sendMessage, getAllmessages };
