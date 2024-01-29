const routes=require("express").Router();
const User=require("../Models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET;
//Register
routes.post("/register",async(req,res)=>{
    
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(208).json({ success: false, errors: "Already Registered" });
        }
        
        const newPass=await bcrypt.hash(req.body.password,10);
        const user=await User.create({
            username:req.body.username,
            email:req.body.email,
            password:newPass
        })

        await user.save();

        res.status(201).json({success:true,message:"User created Succesfully",user});
        
    } catch (error) {
        res.status(500).json(error);
    }
    
})
//Login
routes.post("/login",async(req,res)=>{
    try {
        // console.log(req.body.email,req.body.password)
        const existingUser = await User.findOne({ email: req.body.email });
        if (!existingUser) {
            return res.status(500).json({ success: false, errors: "Invalid Username or Password" });
        }

        const decode=await bcrypt.compare(req.body.password,existingUser.password);
        if(!decode)
        {
            return res.status(500).json({ success: false, errors: "Invalid Username or Password" });
        }

        const accesssToken=jwt.sign({id:existingUser._id,isAdmin:existingUser.isAdmin},JWT_SECRET,{
            expiresIn:"30d"
        })
        const {password,...info}=existingUser._doc;

        
        res.status(201).json({success:true,message:"Logged in Succesfully",user:{info,accesssToken}});

    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports=routes;
