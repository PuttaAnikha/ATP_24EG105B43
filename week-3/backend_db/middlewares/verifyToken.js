import jwt from 'jsonwebtoken'
const {verify}=jwt;
export function verifyToken(req,res,next){
 //token werification logic
 const token=req.cookies?.token;
 //if req is from unauthorized user
 if(!token)
 {
    return res.status(401).json({message:"please login"})
 }
 try{
 //if token exist
const decodeToken=verify(token,'abcdef')
console.log(decodeToken);
    //call next
    next();

}
catch(err){
res.status(401).json({message:"session expired.please login"})
}
}                                                                        