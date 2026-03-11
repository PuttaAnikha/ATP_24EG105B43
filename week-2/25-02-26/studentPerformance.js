 /*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
   // 1. filter() students who passed (marks ≥ 40)
   let s1=students.filter(mark=>mark.marks>=40)
   console.log(s1)
    
   /*2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D*/
   let s2=students.map((grades)=>
{let grade;
    if(grades.marks>=90)
        students.grade="A"
    else if(grades.marks>=75&&grades.marks<90)
        students.grade="B"
    else if(grades.marks>=60&&grades.marks<75)
       students. grade='C'
    else
       students. grade="D"
    return students.grade
})

   console.log(s2)
  // 3. reduce() to calculate average marks
  let s3=students.reduce((acc,mark)=>acc+mark.marks,0)
  let avg=s3/students.length
  console.log(avg)
  // 4. find() the student who scored 92
  let s4=students.find(name=>name.marks=92)
  console.log(s4)
  // 5. findIndex() of student "Kiran"
let s5=students.findIndex((student)=>student.name==="Kiran")
console.log(s5)