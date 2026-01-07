const express=require('express')
const {handleDisplayTable}=require('../controller/staticRouter')
const router=express.Router()

router.get('/',handleDisplayTable)

module.exports=router