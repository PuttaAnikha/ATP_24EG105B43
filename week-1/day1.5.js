let a=function(a,b,c)
{
    if(a>b&&a>c)
        return a;
    else if(b>a&&b>c)
        return b;
    else
        return c;
}
let result=a(40,10,6)
console.log(result)