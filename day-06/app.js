import "dotenv/config";
import express from "express";
import employeeRoutes from "./routes/employeeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use(employeeRoutes);

app.use(errorHandler); // always last

app.listen(3000, () => {
    console.log("Server running on port 3000");
});