import express from "express";

const app=express();
app.get("/",(req,res)=>{
  res.send("test exitoso en esta respuesta");
});

app.get("/test",(req,res)=>{
  res.status(200).send("test de rama secondary")
});

app.get("/login",(req,res)=>{
  res.status(401).send("Login incorrecto");
})

export default app;

