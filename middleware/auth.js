const { handleUserLogin } = require('../controller/user');
const {getUser}=require('../utils/auth')
async function restrictToLoggedInUserOnly(req,res,next){
    const useruuid=req.cookies.uuid;
    if(!useruuid){
        return res.redirect('/login')
    }
    const user=getUser(useruuid)
    if(!user){
        return res.redirect('/login')
    }
    req.user=user;
    next();
    
}

module.exports={
    restrictToLoggedInUserOnly,

}