function studentReport(marks){
 let highest = marks[0];
 let lowest = marks[0];
 let sum = 0;
 for ( let i = 0; i < marks.length; i++){
    if(marks[i] > highest){
         highest = marks[i];
    }else if (marks[i]<lowest){
        lowest = marks[i];
    }
    sum = marks[i] + sum;
}
  avg = sum/marks.length;
  console.log(avg)
  console.log(highest)
  console.log(lowest)
}
studentReport([10,20,40,60,80])