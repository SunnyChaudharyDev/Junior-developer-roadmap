function findLargest(numbers){
let largest = numbers[0];
for(let i = 1 ; i < numbers.length; i++) {
    if (largest < numbers[i]){
      largest = numbers[i];
    }
}
console.log(largest);
}
findLargest([20,50,40]);