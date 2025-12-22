const express=require("express")

const app=express()

app.use("/hello",(req,res)=>{
    res.send("hlo this is at server 7777")
})

app.use("/test",(req,res)=>{
    res.send("hlo this charan at server 7777")
})

app.use((req,res)=>{
    res.send("hlo this bhaskar at server 7777")
})

app.listen(7777,()=>{
    console.log("server run at 7777")
})