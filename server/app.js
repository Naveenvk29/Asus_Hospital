import express from "express";
import cookieParser from "cookie-parser";

import fileUpload from "express-fileupload";

import messageRoute from "./Routers/message.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/test", (req, res) => {
  res.json({ message: "Test API" });
});

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);

app.use("/api/v1/message", messageRoute);

export default app;
