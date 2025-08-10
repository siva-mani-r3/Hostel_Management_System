const mongoose =require("mongoose")
const User6Schema=new mongoose.Schema(
    {
        name:String,
        rollno:String
    }
)
const UserModel5=mongoose.model("users6",User6Schema)
module.exports=UserModel5