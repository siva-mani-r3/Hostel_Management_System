const mongoose =require("mongoose")
const User7Schema=new mongoose.Schema(
    {
        name:String,
        rollno:String
    }
)
const UserModel6=mongoose.model("users7",User7Schema)
module.exports=UserModel6