const routes=require("express").Router();
const List=require("../Models/List");
const fetchUser=require("../middlewares/fetchUser");

//Create List

routes.post("/",fetchUser,async(req,res)=>{
    const {isAdmin}=req.user;
    if(isAdmin)
    {
        try{
            const newList=await List.create(req.body);
            await newList.save();
            res.status(200).json({sucess:true,newList});
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You cannot create a List");
    }
    
})
routes.delete("/:id",fetchUser,async(req,res)=>{
    const {isAdmin}=req.user;
    if(isAdmin)
    {
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List deleted");
        }
        catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(500).json("You cannot create a List");
    }
    
})
routes.get("/",fetchUser,async(req,res)=>{
    
        const listType=req.query.type;
        const listGenre=req.query.genre;
        let list=[];
        try{
            if(listType)
            {
                if(listGenre)
                {
                    list=await List.aggregate([{
                        $sample:{size:10}
                    },{
                        $match:{
                            type:listType,
                            genre:listGenre
                        }
                    }])
                }
                else
                {
                    list=await List.aggregate([{
                        $sample:{size:10}
                    },{
                        $match:{
                            type:listType,
                        }
                    }])

                }
            }
            else
            {
                list=await List.aggregate([{
                    $sample:{size:10}
                }])
            }
            res.status(200).send(list);
        }
        catch(error){
            res.status(500).json(error);
        }
})
//Update
module.exports=routes;

