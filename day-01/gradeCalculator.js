function gradeCalculator(marks){
    if(marks>=90){
        console.log("A");
    }else if(marks>80 & marks<=89){
         console.log("B");
    }else if (marks>70 & marks<=79){
         console.log("c");
    } else if (marks>60 & marks<=69){
         console.log("D");
    } else if (marks<60){
         console.log("Fail");
    }
}
gradeCalculator(56);