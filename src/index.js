import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT || 4000;
const app=express();
app.get("/",(req,res)=>{
  console.log("test con exito")
});

app.listen(PORT,()=>console.log("coneccion establecida con exito"));

