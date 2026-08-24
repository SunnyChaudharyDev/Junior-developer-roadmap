function add (a, b){
    return a + b;
}
function subtract (a, b){
    return a - b;
}
function multiplication (a, b){
    return a * b;
}
function divison (a, b){
    if (b === 0) {
        console.log("a is not divisible by b");
    }else {
        return a / b;
    }
    
}
function calculate(operator, a, b) {
  switch (operator) {
    case "+":
        return add(a,b);
  
  case "-":
        return subtract(a,b);
  
  case "*":
        return multiplication(a,b);
  
  case "/":
        return divison(a,b);
  default:
}
}
console.log(calculate("+",2,3));