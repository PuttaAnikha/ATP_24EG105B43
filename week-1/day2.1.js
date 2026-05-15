const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

//Insert new Emp at 2nd position
employees.splice(2,0,{eno:201,name:'anikha',marks:[1,2,3]})
console.log(employees)
//Remove an emp with name "Kiran"

for(let v=0;v<employees.length;v++)
{
    if(employees[v].name==='Kiran')
    {
        employees.splice(v,1)
}
}
console.log(employees)
//Change the last mark 95 to 75 of emp  "Sneha"
for (let i = 0; i < employees.length; i++)
{
    if (employees[i].name === "Sneha")
    {
        let lastIndex = employees[i].marks.length - 1;
        employees[i].marks[lastIndex] = 75;
    }
}

console.log(employees);