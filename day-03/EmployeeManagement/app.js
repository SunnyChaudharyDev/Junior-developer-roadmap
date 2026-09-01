import { 
    addEmployee,
    removeEmployee,
    updateEmployee,
    findEmployeeById,
    getEmployeesByDepartment,
    calculateTotalSalary,
    calculateAverageSalary,
    highestToLowest,
    lowestToHighest
} from "./services/employeeServices.js";
import express from "express";
import { employees } from "./data/employees.js";

const app = express();
const port = 3000;
app.use(express.json());
/*-----------------get Employees------------------------*/
app.get("/employees", (req, res) => {
   res.send(employees);
});
/*------------------Get employees by id-----------------------*/
app.get("/employees/:id", (req, res) => {
    const id = req.params.id;

    const employee = findEmployeeById(id);

    if (!employee) {
        return res.status(404).send("Employee not found");
    }

    res.json(employee);
});
/*----------------------New employee------------------------*/
app.post("/employees/",(req,res)=>{
   addEmployee(req.body.name,req.body.department,req.body.salary,req.body.experience);
   res.status(201).json(req.body);
});
/*------------------------Delete employee by id--------------------------*/
app.delete("/employees/:id",(req,res) => {
 const id = req.params.id;
 const employee = removeEmployee(id);
 res.json(employee);
});
/*--------------------Update Employee bu id--------------------------*/
app.put("/employee/:id",(req,res) => {
const id = req.params.id;
const employee = updateEmployee(id,req.body.name,req.body.department,req.body.salary,req.body.experience)
res.json(employee);
});
/*--------------------Listening server----------------------------*/
app.listen(port, () => {
    console.log(`server running at ${port}`);
});