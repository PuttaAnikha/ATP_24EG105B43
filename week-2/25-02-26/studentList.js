/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:*/
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
    //1. filter() marks ≥ 40 (pass marks)
    let s1=marks.filter(mark=>mark>=40)
    console.log(s1)
    //2. map() to add 5 grace marks to each student
    let s2=marks.map(marks=>marks+5)
    console.log(s2)
    //3. reduce() to find highest mark
    let s3=marks.reduce((acc,val)=>acc>val?acc:val)
    console.log(s3)

    //4. find() first mark below 40
    let s4=marks.find(mark=>mark<40)
    console.log(s4)
    //5. findIndex() of mark 92
    let s5=marks.findIndex(mark=>mark===92)
    console.log(s5)