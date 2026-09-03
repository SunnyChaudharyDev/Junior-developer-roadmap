import db from "../db.js";

/*-------------- GET Employees -----------------*/
export async function getEmployee() {
    const result = await db.query(
        "SELECT * FROM employees ORDER BY id ASC"
    );

    return result.rows;
}


/*-------------- Add Employee -----------------*/
export async function addEmployee(name, department, salary, experience) {
    const result = await db.query(
        `INSERT INTO employees
        (name, department, salary, experience)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [name, department, salary, experience]
    );

    return result.rows[0];
}


/*-------------- Remove Employee -----------------*/
export async function removeEmployee(id) {
    const result = await db.query(
        `DELETE FROM employees
         WHERE id = $1
         RETURNING *`,
        [id]
    );

    return result.rows[0];
}


/*-------------- Update Employee -----------------*/
export async function updateEmploye(
    id,
    name,
    department,
    salary,
    experience
) {
    const result = await db.query(
        `UPDATE employees
         SET name = $2,
             department = $3,
             salary = $4,
             experience = $5
         WHERE id = $1
         RETURNING *`,
        [id, name, department, salary, experience]
    );

    return result.rows[0];
}


/*-------------- Find Employee By ID -----------------*/
export async function findEmployeeById(id) {
    const result = await db.query(
        `SELECT * FROM employees
         WHERE id = $1`,
        [id]
    );

    return result.rows[0];
}


/*-------------- Search Employees -----------------*/
export async function searchEmployees(name, department) {
    const result = await db.query(
        `SELECT * FROM employees
         WHERE name = $1
         AND department = $2`,
        [name, department]
    );

    return result.rows;
}


/*-------------- Get Employees By Department -----------------*/
export async function getEmployeesByDepartment(department) {
    const result = await db.query(
        `SELECT * FROM employees
         WHERE department = $1`,
        [department]
    );

    return result.rows;
}


/*-------------- Highest Paid Employee -----------------*/
export async function findHighestPaidEmployee() {
    const result = await db.query(
        `SELECT * FROM employees
         ORDER BY salary DESC
         LIMIT 1`
    );

    return result.rows[0];
}


/*-------------- Calculate Total Salary -----------------*/
export async function calculateTotalSalary() {
    const result = await db.query(
        `SELECT SUM(salary) AS total_salary
         FROM employees`
    );

    return result.rows[0];
}


/*-------------- Calculate Average Salary -----------------*/
export async function calculateAverageSalary() {
    const result = await db.query(
        `SELECT AVG(salary) AS average_salary
         FROM employees`
    );

    return result.rows[0];
}


/*-------------- Highest To Lowest Salary -----------------*/
export async function highestToLowest() {
    const result = await db.query(
        `SELECT * FROM employees
         ORDER BY salary DESC`
    );

    return result.rows;
}


/*-------------- Lowest To Highest Salary -----------------*/
export async function lowestToHighest() {
    const result = await db.query(
        `SELECT * FROM employees
         ORDER BY salary ASC`
    );

    return result.rows;
}