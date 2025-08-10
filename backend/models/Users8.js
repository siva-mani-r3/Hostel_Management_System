const mongoose =require("mongoose")
const User8Schema=new mongoose.Schema(
    {
        name:String,
        rollno:String
    }
)
const UserModel7=mongoose.model("users8",User8Schema)
module.exports=UserModel7