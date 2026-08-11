import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT || 4000;
const app=express();
app.get("/",(req,res)=>{
  console.log("test con exito")
});

app.get("/test",(req,res)=>{
  console.log("test de rama secondary")
})
app.listen(PORT,()=>console.log("coneccion establecida con exito"));

