import dotenv from "dotenv";
import connectDB from "./config/index.js";
import { app } from "./app.js";

dotenv.config();

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
