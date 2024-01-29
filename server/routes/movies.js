const routes=require("express").Router();
const Movie=require("../Models/Movie");
const fetchUser=require("../middlewares/fetchUser");

//Create Movie

routes.post("/",fetchUser,async(req,res)=>{
    const {isAdmin}=req.user;
    if(isAdmin)
    {
        try{
            const newMovie=await Movie.create(req.body);
            await newMovie.save();
            res.status(200).json({sucess:true,newMovie});
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You cannot create a Movie");
    }
    
})
//getAll
routes.get("/",fetchUser,async(req,res)=>{
    try {
        const movies=await Movie.find();
        res.status(200).json({movies});
    } catch (error) {
        res.status(500).json(error);
    }
})
//Update
routes.put("/:id",fetchUser,async(req,res)=>{
    const {isAdmin}=req.user;
    if(isAdmin)
    {
        
        try{
            const updateMovie=await Movie.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json({sucess:true,updateMovie});
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You cannot update a Movie");
    }
    
})
//Delete 
routes.delete("/:id",fetchUser,async(req,res)=>{
    const {isAdmin}=req.user;
    if(isAdmin)
    {
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie has been deleted");
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You cannot delete a Movie");
    }
    
})
//Get
routes.get("/find/:id",fetchUser,async(req,res)=>{
        try{
            const getMovie=await Movie.findById(req.params.id);
            res.status(200).json({sucess:true,getMovie});
        }
        catch(error){
            res.status(500).json(error);
        }
})
//Get random
routes.get("/random",fetchUser,async(req,res)=>{

    const type=req.query.type;
    let movies;
    try{
        if(type=="series")
        {
            movies=await Movie.aggregate([
                {
                    $match:{isSeries:true}
                },
                {
                    $sample:{size:1}
                    
                }
            ])
        }
        else
        {
            movies=await Movie.aggregate([
                {
                    $match:{isSeries:false}
                },
                {
                    $sample:{size:1}
                    
                }
            ])

        }
        res.status(200).json({sucess:true,movies});
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports=routes;

