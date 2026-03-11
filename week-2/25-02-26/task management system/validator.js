function validateTitle(title) 
{   
    //let valid=true
    if(!title)
    {                                            
        console.log("title is empty");
    }  
    if(title.length<=3) 
    { 
        console.log("min 3 characters required");
    }
    return true
} 
function validatePriority(priority) 
{ 
   if(priority!='low'||priority!='medium'||priority!='high'){
    console.log("priority must be low,medium,high")}
   return priority 
} 
function validateDueDate(date) 
{ 
    //let valid=true 
    let today=new date() 
    if(date<today) {
        console.log("enter valid date") }
    return "valid date"
}
export{validateTitle,validatePriority,validateDueDate}       