const express=require('express')
const {handleDisplayTable}=require('../controller/staticRouter')
const {restrictToLoggedInUserOnly}=require('../middleware/auth')
const router=express.Router()

router.get('/',restrictToLoggedInUserOnly,handleDisplayTable)
router.get('/signup',(req,res)=>{
    res.render("signup")
})
router.get('/login',(req,res)=>{
    res.render("login")
})

module.exports=router