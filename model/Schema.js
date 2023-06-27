
const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    email:{type:String,unique:true,require:true},
    password:{type:String, require:true},
    UserName:{type:String,require:true},
    phone:{type:Number}
})
const collection = new mongoose.model("User", userSchema)

module.exports=collection   