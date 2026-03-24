/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
   // 1. filter() employees from IT department
   let s1=employees.filter(employee=>employee.department=="IT")
   console.log(s1)
    //2. map() to add:
            //netSalary = salary + 10% bonus
let netSalary=employees.map(employee=>(employee.salary)+(employee.salary*(10/100)))
console.log(netSalary)
    //3. reduce() to calculate total salary payout
    let totalSalary=employees.reduce((acc,salary)=>acc+salary.salary,0)
    console.log(totalSalary)
    //4. find() employee with salary 30000
    let employee=employees.find(employee=>employee.salary===30000)
    console.log(employee)
   // 5. findIndex() of employee "Neha"
   let index=employees.findIndex(employee=>employee.name==="Neha")
   console.log(index)
