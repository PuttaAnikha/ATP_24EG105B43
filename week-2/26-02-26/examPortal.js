//1.Exam portal simulator:
//-----------------------------
//When a student submits an exam:

        //Immediately show: “Exam submitted successfully”
        console.log("exam submitted")
        //After 2 seconds → show: “Evaluating answers…”
        setTimeout(()=>
        {
            console.log("evaluating answers")
        },2000)
        //After 4 seconds → show: “Result: Pass”
        setTimeout(()=>
        {
            console.log("result:pass")
        },4000)


        