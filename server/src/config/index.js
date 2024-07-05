import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB could not be connected :", error);
    process.exit(1);
  }
};

export default connectDB;
