const {nanoid}=require('nanoid')
const mongoose=require('mongoose')
const URL=require('../models/url')

async function getLongUrl(req,res){
    const id=req.params.id;
    const result=await URL.findOneAndUpdate(
        {shortId:id},
        {
            $inc:{clickCount:1},
            $push:{visitHistory:{}},
        },
        {new:true}
    );
    if(!result) return res.status('404').json({msg:'short url not found'})
    res.redirect(result.longUrl)
}

async function getAnalytics(req,res){
    const id=req.params.id;
    const result=await URL.findOne({shortId:id})
    if(!result) return res.status('404').json({msg:'short url not found'})
    
    res.status(200).json({clicks:result.clickCount,history:result.visitHistory})
    
}

async function createShortId(req,res){
    const longUrl=req.body.longUrl;
    if(!longUrl) return res.status(400).json({msg:'Url is required'})
    const shortId=nanoid(5);
    const result=await URL.create({
        shortId,
        longUrl,
    })
    res.status(200).json({msg:'success',shortId:result.shortId})


}

module.exports={
    getLongUrl,
    getAnalytics,
    createShortId,
}