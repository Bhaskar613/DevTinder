const express=require("express")

const app=express()

const {authAdmin, authUser} = require("./middlewares/auth")



app.use("/admin",authAdmin)

app.get("/admin/getalldata",(req,res,next)=>{
   res.send("get all data")
   
}

)

app.get("/user",authUser,(req,res,next)=>{
   res.send("sent all data")
   
}

)




app.listen(7777,()=>{
    console.log("server run at 7777")
})