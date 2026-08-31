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

app.get("/employees", (req, res) => {
   res.send(employees);
});
app.get("/employees/:id", (req, res) => {
    const id = req.params.id;

    const employee = findEmployeeById(id);

    if (!employee) {
        return res.status(404).send("Employee not found");
    }

    res.json(employee);
});
app.post("/employees/",(req,res)=>{
   addEmployee(req.body.name,req.body.department,req.body.salary,req.body.experience);
   res.status(201).json(req.body);
});
app.delete("/employees/:id",(req,res) => {
 const id = req.params.id;
 const employee = removeEmployee(id);
 res.json(employee);
});
app.put("/employee/:id",(req,res) => {
const id = req.params.id;
const employee = updateEmployee(id,req.body.name,req.body.department,req.body.salary,req.body.experience)
res.json(employee);
});
app.listen(port, () => {
    console.log(`server running at ${port}`);
});