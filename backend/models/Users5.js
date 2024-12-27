const mongoose =require("mongoose")
const User5Schema=new mongoose.Schema(
    {
        name:String,
        rollno:String
    }
)
const UserModel4=mongoose.model("users5",User5Schema)
module.exports=UserModel4