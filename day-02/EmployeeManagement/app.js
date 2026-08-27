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
console.log(getEmployeesByDepartment("Engineering"));