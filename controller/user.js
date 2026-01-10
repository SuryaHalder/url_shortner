require("dotenv").config();

const User=require('../models/user')
const {setUser,getUser}=require('../utils/auth')

async function handleUserSignUp(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect('/')
}

async function handleUserLogin(req,res){
    const {email,password}=req.body
    const user=await User.findOne({
        email,
        password,
    })
    //console.log(user)
    if(!user) return res.render('login',{
        err:"invalid username or password"
    })
    const token=setUser(user);
    res.cookie('token',token,{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000,
    })
    
    return res.redirect('/')
}


module.exports={
    handleUserSignUp,
    handleUserLogin,
}