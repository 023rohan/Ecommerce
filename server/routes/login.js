const express = require("express")
const registerrouter = express.Router();
const User  = require('../models/user'); 

registerrouter.post('/login',(req,res)=>{
    const {email,password} = req.body;
    User.findOne({email:email}).then(value=>{
        if(value){
            if(password==value.password){
                res.send({message:"Login Successfully",user:value})
            }else{
                res.send({message:"Password Didn't match"})
            }
        }
        else{
            res.send({message:"User Doesn't Exist"});
        }
    })
})

registerrouter.post('/register',(req,res)=>{
    const{Firstname,Lastname,email,password} = req.body;

    User.findOne({email:email}).then((err,value)=>{
        console.log("already existed",value)
        if(value){
            res.send({message:"User Already Exist"})
        }
        else{
            const users = new User({
                Firstname:Firstname,
                Lastname:Lastname,
                email:email,
                password:password
            })
            users.save((err)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"added successfully"})
                }
            })
        }
    })

   
})

module.exports = registerrouter