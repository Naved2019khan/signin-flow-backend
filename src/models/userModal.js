const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email : { 
        type : String,
        required : "email is required" , 
        unique : true
    },
    password : { 
        type : String,
        required : "password is required" ,
    },
    name : String ,
    resetPasswordToken : String,
    resetPasswordExpires : Date
},
 {
    versionKey : false,
 }
)

module.exports  = mongoose.model("users",userSchema)