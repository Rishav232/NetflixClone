const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET;

const fetchUser=(req,res,next)=>{

    const token=req.header("token");
    if(!token)
    res.status(404).send("Not Verified");
    
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data;

    next();
}
module.exports=fetchUser;