const mongoose=require('mongoose')
const URL=require('../models/url')

async function handleDisplayTable(req,res){
    const urls=await URL.find({})
    return res.render("home",{
        urls,
    })
}

module.exports={
    handleDisplayTable,
    
}