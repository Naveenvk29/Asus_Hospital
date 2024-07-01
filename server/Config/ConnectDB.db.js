import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../contant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected successfully DB_HOST:-${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
