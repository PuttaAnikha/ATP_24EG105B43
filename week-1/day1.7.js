function search(arr,target)
{
    //t target=20;
    for(let i=0;i<arr.length;i++)
        if(arr[i]==target)
            return i;
        
    return "not found";
}
let a=[3,9,80,20]
let result=search(a,80)
console.log(result)