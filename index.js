require("dotenv").config();
const express=require('express')
const path=require("path")
const {connectDB}=require('./connect')
const urlRouter=require('./routes/url')
const staticRoute=require('./routes/staticRouter')

const app=express();
const PORT=8000

connectDB(process.env.MONGODB_URL)
console.log(process.env.MONGODB_URL)

app.set("view engine","ejs")
app.set("views",path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/',staticRoute)
app.use('/url',urlRouter);

app.listen(process.env.PORT || 8000,()=>console.log(`Server is listening on port ${PORT}`))
