const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const movieSchema=new Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String},
    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    genre:{type:String},
    year:{type:String},
    trailer:{type:String},
    video:{type:String},
    limit:{type:Number},
    isSeries:{type:Boolean,default:false}
},{timestamps:true});

const Movie=mongoose.model("Movie",movieSchema);
Movie.createIndexes();
module.exports=Movie;