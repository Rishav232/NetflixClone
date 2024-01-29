const routes=require("express").Router();
const User=require("../Models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const fetchUser=require("../middlewares/fetchUser");
const JWT_SECRET=process.env.JWT_SECRET;

//Update Profile

routes.put("/updateProfile/:id",fetchUser,async(req,res)=>{
    const {id,isAdmin}=req.user;
    if(id===req.params.id||isAdmin)
    {
        try{
            if(req.body.password)
            {
                const newPass=await bcrypt.hash(req.body.password,10);
                req.body.password=newPass;
            }
            const user=await User.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true});
            res.status(200).json({sucess:true,message:"Profile Updated",user});
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You can only update your own profile");
    }
    
})
routes.delete("/deleteProfile/:id",fetchUser,async(req,res)=>{
    const {id,isAdmin}=req.user;
    if(id===req.params.id||isAdmin)
    {
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({sucess:true,message:"Deleted Successfully"});
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You can only delete your own profile");
    }
    
})
routes.get("/getProfile/:id",async(req,res)=>{
        const {id}=req.params;
        try{
            const user=await User.findById(id);
            const {password,...info}=user._doc;
            res.status(200).json({sucess:true,info});
        }
        catch(error){
            res.status(500).json(error);
        }
})
routes.get("/",fetchUser,async(req,res)=>{
    const {isAdmin}=req.user;
    if(isAdmin)
    {
        try{
            const user=req.query.new?await User.find().sort({_id:-1}).limit(1):await User.find();
            res.status(200).json({sucess:true,user});
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You are not allowed to fetch user's details");
    }
    
})
routes.get("/stats",async(req,res)=>{
    const today=new Date();
    // console.log(today.setFullYear());
    const latYear=today.setFullYear(today.setFullYear()-1);
    // console.log(latYear);
    const monthsArray=["January","February","March","April","May","June","July","August","September","October","November","December"];

    try{
        const getStats=await User.aggregate([
        {
            $project:{
                month:{$month:"$createdAt"}
            }
        },
        {
            $group:{
                _id:"$month",
                total:{$sum:1}
            }
        }
    ]);
    res.status(201).json(getStats);
   }catch(err){
    res.status(500).json(err);
   }
})
module.exports=routes;

