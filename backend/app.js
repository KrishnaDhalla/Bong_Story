const express =require("express")
const app=express()
const cors= require("cors")
const mongoose=require("mongoose")
const dotenv=require('dotenv')
app.use(cors({origin:true}))
dotenv.config();
app.get("/",(req,res)=>{
    return res.json("hii There")
})

//user Authentication route
const userRoute=require("./routes/auth")
app.use("/api/users/",userRoute)


mongoose.set('strictQuery',false)
mongoose.connect(process.env.DB_STRING,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then (()=>{
  console.log("DB Connected");
}).catch((err)=> console.log(err));


app.listen(4000,()=>console.log("Listening to port 4000"))