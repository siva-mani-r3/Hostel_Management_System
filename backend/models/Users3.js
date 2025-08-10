const mongoose =require("mongoose")
const User2Schema=new mongoose.Schema(
    {
        name:String,
        rollno:String
    }
)
const UserModel2=mongoose.model("users3",User2Schema)
module.exports=UserModel2