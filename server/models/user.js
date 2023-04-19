/* Schema for the Item document */

const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        Firstname: {
            type: String,
            required: true
        },
        Lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
        
    }
)

module.exports = mongoose.model("User", userSchema)