const mongoose=require('mongoose')

function connectDB(url){
    mongoose
            .connect(url)
            .then(()=>{
                console.log(`MongoDB Connected succesfully`)
            })
            .catch((err)=>console.log(err))
}

module.exports={
    connectDB,
}