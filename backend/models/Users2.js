const mongoose =require("mongoose")
const User1Schema=new mongoose.Schema(
    {
        name:String,
        rollno:String

    }
)
const UserModel1=mongoose.model("users2",User1Schema)
module.exports=UserModel1