const express=require('express')
const {
    getLongUrl,
    getAnalytics,
    createShortId,

}=require('../controller/url')
const Router=express.Router()

Router.get('/analytics/:id',getAnalytics)
Router.post('/',createShortId)
Router.get('/:id',getLongUrl)

module.exports=Router