const express=require("express");
const mongoose=require("mongoose");
const app=express();
const dotenv=require("dotenv");
const cors=require("cors");
mongoose.set("strictQuery",true);
dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("Connected to Mongo");
})
.catch((err)=>{
    console.log(err);
    console.log("Error");
})
app.use("/api/auth/",require("./routes/auth"));
app.use("/api/user/",require("./routes/user"));
app.use("/api/movies/",require("./routes/movies"));
app.use("/api/list/",require("./routes/list"));
app.listen(5000,()=>{
    console.log("Backend Running");
})