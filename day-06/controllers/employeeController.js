import {
    getEmployee,
    addEmployee,
    removeEmployee,
    updateEmploye,
    findEmployeeById
} from "../services/employeeService.js";


export async function getAllEmployees(req, res, next) {
    try {
        const employees = await getEmployee();

        res.json(employees);
    } catch (error) {
        next(error);
    }
}


export async function getEmployeeById(req, res, next) {
    try {
        const id = req.params.id;

        const employee = await findEmployeeById(id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.json(employee);

    } catch (error) {
        next(error);
    }
}


export async function createEmployee(req, res, next) {
    try {

        if (
req.body.salary === undefined || req.body.salary < 0 ||
req.body.experience === undefined || req.body.experience < 0
        ) {
            return res.status(400).json({
                message: "Invalid data"
            });
        }

        const employee = await addEmployee(
            req.body.name,
            req.body.department,
            req.body.salary,
            req.body.experience
        );

        res.status(201).json(employee);

    } catch (error) {
        next(error);
    }
}


export async function deleteEmployee(req, res, next) {
    try {

        const id = req.params.id;

        const employee = await removeEmployee(id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.json(employee);

    } catch (error) {
        next(error);
    }
}


export async function updateEmployee(req, res, next) {
    try {

        const id = req.params.id;

        if (
 req.body.salary === undefined || req.body.salary < 0 ||
req.body.experience === undefined || req.body.experience < 0
        ) {
            return res.status(400).json({
                message: "Invalid data"
            });
        }

        const employee = await updateEmploye(
            id,
            req.body.name,
            req.body.department,
            req.body.salary,
            req.body.experience
        );

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.json(employee);

    } catch (error) {
        next(error);
    }
}