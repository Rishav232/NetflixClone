const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    profilePic:{type:String,default:""},
    isAdmin:{type:Boolean,default:false}
},{timestamps:true});

const User=mongoose.model("User",userSchema);
User.createIndexes();
module.exports=User;