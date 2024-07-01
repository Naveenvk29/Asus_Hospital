import dotenv from "dotenv";

import connectDB from "./Config/ConnectDB.db.js";
import app from "./app.js";

dotenv.config();
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.error("Error connecting to the database");
  });
