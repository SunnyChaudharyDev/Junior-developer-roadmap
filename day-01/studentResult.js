function getStudentResult(name, marks){
    let sum = 0;
    for(let i = 0; i < marks.length; i++){
        sum = marks[i] + sum; 
    }
    let avg = 0;
     avg = sum/marks.length; 
     const grade = ["A","B","C","D","Fail"]
     let studentgrade;

     if (avg < 60){
        studentgrade = grade[4] ;
     } else if (avg >= 60 && avg < 70){
        studentgrade = grade[3] ;
     }else if (avg >= 70 && avg < 80){
        studentgrade = grade[2] ;
     }else if (avg >= 80 && avg < 90){
        studentgrade = grade[1] ;
     }else if (avg >= 90){
        studentgrade = grade[0] ;
     }

console.log("Student : " + name ) ;
console.log("Marks : " + marks);
console.log("Average : " + avg);
console.log("Grade :" + studentgrade);
    
}
return(getStudentResult("sunny",[90,80,75,85,95]));