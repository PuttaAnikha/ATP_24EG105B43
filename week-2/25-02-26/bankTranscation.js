/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//Tasks:
  //  1. filter() all credit transactions
  let s1=transactions.filter(type=>type.type==="credit")
  console.log(s1)
    //2. map() to extract only transaction amounts
    let s2=transactions.map(extract=>extract.amount)
    console.log(s2)
  //  3. reduce() to calculate final account balance
  let accnt_balance=transactions.reduce((acc,amt)=>{
   if(amt.type==="credit"){
    return acc+amt.amount}
   else{
    return acc-amt.amount}
  },0)
  console.log(accnt_balance)
   // 4. find() the first debit transaction
   let first_debit=transactions.find(transc=>transc.type=="debit")
   console.log(first_debit)
    //5. findIndex() of transaction with amount 10000

    let index=transactions.findIndex(transc=>transc.amount===10000)
    console.log(index)