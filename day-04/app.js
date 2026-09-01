import express from "express";

import employeeRoutes from "./routes/employeeRoutes.js";

import { errorHandler } from "./middleware/errorHandler.js";


const app = express();


// Middleware
app.use(express.json());


// Routes
app.use(employeeRoutes);


// Error handling middleware
app.use(errorHandler);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});