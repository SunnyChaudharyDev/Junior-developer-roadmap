import employees from "../data/employees.js";

import {
    addEmployee,
    removeEmployee,
    updateEmploye,
    findEmployeeById
} from "../services/employeeService.js";


export function getEmployees(req, res, next) {

    try {
        res.json(employees);

    } catch (error) {
        next(error);
    }
}


export function getEmployeeById(req, res, next) {

    try {
        const id = req.params.id;

        const employee = findEmployeeById(id);

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


export function createEmployee(req, res, next) {

    try {

        if (
            !req.body.name ||
            !req.body.department ||
            req.body.salary < 0 ||
            req.body.experience < 0
        ) {
            return res.status(400).json({
                message: "Invalid data"
            });
        }

        const employee = addEmployee(
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


export function deleteEmployee(req, res, next) {

    try {

        const id = req.params.id;

        const employee = removeEmployee(id);

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


export function updateEmployee(req, res, next) {

    try {

        const id = req.params.id;

        if (
            !req.body.name ||
            !req.body.department ||
            req.body.salary < 0 ||
            req.body.experience < 0
        ) {
            return res.status(400).json({
                message: "Invalid data"
            });
        }

        let employee = updateEmploye(
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