import mongoose, { Types } from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    maxLength: 10,
  },
  message: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
