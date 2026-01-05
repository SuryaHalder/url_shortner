const express=require('express')
const {
    getLongUrl,
    getAnalytics,
    createShortId,

}=require('../controller/url')
const Router=express.Router()

Router.get('/url/analytics/:id',getAnalytics)
Router.post('/url',createShortId)
Router.get('/:id',getLongUrl)

module.exports=Router