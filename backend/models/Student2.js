const mongoose=require("mongoose")
const StudentSchema1=new mongoose.Schema({
    name:String,
    email:String,
    password:String
    
})
const StudentModel1=mongoose.model("students1",StudentSchema1)
module.exports=StudentModel1