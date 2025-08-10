const mongoose =require("mongoose")
const User4Schema=new mongoose.Schema(
    {
        name:String,
        rollno:String
    }
)
const UserModel3=mongoose.model("users4",User4Schema)
module.exports=UserModel3