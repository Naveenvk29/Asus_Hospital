import mongoose from "mongoose";
import validator from "validator";

const messageSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
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
    maxLength: 12,
  },
  message: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
