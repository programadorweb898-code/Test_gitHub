import express from "express";

const app=express();

app.use(express.json());
app.get("/",(req,res)=>{
  res.send("test exitoso");
});

app.get("/test",(req,res)=>{
  res.status(200).send("test de rama secondary")
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "123456") {
    return res.status(200).json({ message: "Login exitoso" });
  }

  res.status(401).json({ message: "Credenciales incorrectas" });
});

export default app;

