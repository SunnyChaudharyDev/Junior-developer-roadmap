import employees from "../data/employees.js";
/*--------------Add Employees--------------*/
 export function addEmployee(Name,Department,Salary,Experience) {
    const idValue =  employees.length + 1;
    const newEmploye = {id : idValue, name : Name, department: Department, salary: Salary, experience: Experience};
   employees.push(newEmploye);
   return newEmploye;
}
/*--------------Removing employee--------------*/
export function removeEmployee(Id) {

    const index = employees.findIndex(
        (employee) => employee.id === Number(Id)
    );

    if (index === -1) {
        return;
    }

    const deletedEmployee = employees.splice(index, 1);

    return deletedEmployee[0];
}
/*--------------------Updating Employee----------------*/
export function updateEmploye(Id, Name, Department, Salary, Experience) {

    const employee = employees.find(
        (employe) => employe.id === Number(Id)
    );

    employee.name = Name;
    employee.department = Department;
    employee.salary = Salary;
    employee.experience = Experience;

    return employee;
}
/*-------------------Finding Employee by id-----------------*/
export function findEmployeeById(Id){
    let result  = employees.find(u=> u.id === Number(Id))
    return result ;
}
/*---------------------Search Employees----------------------*/
export function searchEmployees(Name,Department){
   let result = employees.find(u => u.name === Name && u.department === Department);
   return result;
}
/*----------------------Get Employee by Department-------------------*/
export function getEmployeesByDepartment(Department){
    return employees.filter((d) => {
    return (d.department === Department)
   });
}
/*----------------------Highest paid employee------------------------*/
export function findHighestPaidEmployee(){
    let highestPaid = employees[0];
     employees.forEach(e => {
        if (e.salary > highestPaid.salary){
        highestPaid = e;
        }
    });
    return highestPaid;
}
/*---------------------------Calculate total salary-----------------------*/
export function calculateTotalSalary(){
    let result = employees.reduce((total,currValue) => {
        return total + currValue.salary;
    }, 0);
    return result;
}
/*--------------------------Calculate Average salary--------------------------*/
export function calculateAverageSalary(){
      let result = employees.reduce((total,currValue) => {
        return total + currValue.salary / employees.length;
    }, 0);
     return result;
};
/*----------------------------Highest to lowest-------------------------------*/
export function highestToLowest(){
    employees.sort((a,b) => b.salary - a.salary);
     return employees;
};
/*---------------------------lowest to Highest-------------------------------*/
export function lowestToHighest(){
employees.sort((a,b) => a.salary - b.salary);
     return employees;
}
export default {
    addEmployee,
    removeEmployee,
    updateEmploye,
    findEmployeeById,
    getEmployeesByDepartment,
    calculateTotalSalary,
    calculateAverageSalary,
    highestToLowest,
    lowestToHighest
}