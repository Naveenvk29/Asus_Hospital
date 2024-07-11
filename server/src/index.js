import dotenv from "dotenv";
import connectDB from "./config/index.js";
import { app } from "./app.js";

import cloudinary from "cloudinary";

dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
    // console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB");
    process.exit(1);
  });
