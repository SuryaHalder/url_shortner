require("dotenv").config();
const jwt=require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET;
function setUser(user){
    const payload={
        _id: user._id,
        email:user.email,
    }
    return jwt.sign(payload,JWT_SECRET,{expiresIn: "7d"})
}

function getUser(token){
    try{
        return jwt.verify(token,JWT_SECRET)
    }catch(err){
        return null
    }
    
}

module.exports={
    setUser,
    getUser,
    
}