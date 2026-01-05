require("dotenv").config();
const express=require('express')
const {connectDB}=require('./connect')
const urlRouter=require('./routes/url')

const app=express();
const PORT=8000

connectDB(process.env.MONGODB_URL)
console.log(process.env.MONGODB_URL)

app.use(express.json());

app.use('/',urlRouter)

app.listen(process.env.PORT || 8000,()=>console.log(`Server is listening on port ${PORT}`))
