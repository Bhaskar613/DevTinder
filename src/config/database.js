const mongoose = require("mongoose")

const connectDB=async () =>{
    await mongoose.connect("mongodb+srv://tonangibhaskararao_db_user:Bhaskara1234@cluster0.rqksccz.mongodb.net/devTinder")
}


module.exports= connectDB

