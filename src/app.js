const express=require("express")

const app=express()

const connectDB=require("./config/database")

const User=require("./models/user")

app.post("/signup",async (req,res)=>{
    const user= new User({
        firstName:"virat",
        lastName:"kohli",
        emailId:"virat@gmail.com",
        password:"virat@123"
    })

    try{
       await user.save()
       res.send("User added successfully")
    }
    catch (err){
        res.status(400).send("Error saving the user:  "+err.message)
    }
    
})

connectDB()
.then(()=>{
    console.log("database connection established...")
   app.listen(7777,()=>{
      console.log("server run at 7777")
   })
})
.catch((err)=>{
    console.error("database is Not connected ")
})





