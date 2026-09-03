import express from "express";
import { authenticate,authorize } from "../middleware/authMiddleware.js";
import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    deleteEmployee,
    updateEmployee
} from "../controllers/employeeController.js";

const router = express.Router();


router.get("/employees",authenticate ,getAllEmployees);

router.get("/employees/:id",authenticate,authorize("admin"), getEmployeeById);

router.post("/employees",authenticate ,createEmployee);

router.put("/employees/:id",authenticate,authorize("admin"), updateEmployee);

router.delete("/employees/:id",authenticate,authorize("admin"), deleteEmployee);


export default router;