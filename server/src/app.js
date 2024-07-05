import express from "express";
import cookieParser from "cookie-parser";

import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.routes.js";
import appointmentRouter from "./routes/appointment.routes.js";
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/test", (req, res) => {
  res.json({ message: "Test API" });
});

app.use("/api/v1/message", messageRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/appointment", appointmentRouter);

export { app };
