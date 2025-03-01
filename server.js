const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT=3000


app.get('/',(req,res)=>{
    res.send("Welcome to the session")
})
app.post('/register',(req,res)=>{ 
    const {username,email,password}=req.body})   
mongoose.connect("mongodb+srv://kartik:kartik@cluster0.xtlac.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{console.log("Database connected successfully....")}
).catch(
    (err)=>console.log(err)
)
app.listen(PORT),(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("server is running on the port :+PORT")
}