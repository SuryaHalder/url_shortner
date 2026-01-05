const mongoose=require('mongoose')

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        unique: true,
        required:true,
        index:true,
    },
    longUrl:{
        type:String,
        required:true,
    },
    clickCount:{
        type:Number,
        default:0,
    },
    visitHistory:[{
        timestamp:{
            type:Date,
            default:Date.now()
        }
    }]
},{timestamps:true})

const URL=mongoose.model('url',urlSchema)

module.exports=URL;