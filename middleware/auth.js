const { handleUserLogin } = require('../controller/user');
const {getUser}=require('../utils/auth')
async function restrictToLoggedInUserOnly(req,res,next){
    const userToken=req.cookies.token;
    if(!userToken){
        return res.redirect('/login')
    }
    const user=getUser(userToken)
    if(!user){
        return res.redirect('/login')
    }
    req.user=user;
    next();
    
}

module.exports={
    restrictToLoggedInUserOnly,

}