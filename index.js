require("dotenv").config();
const express=require('express')
const cookieParser=require('cookie-parser')
const path=require("path")
const {connectDB}=require('./connect')
const {restrictToLoggedInUserOnly}=require('./middleware/auth')

const urlRouter=require('./routes/url')
const staticRoute=require('./routes/staticRouter')
const userRoute=require('./routes/user')

const app=express();

connectDB(process.env.MONGODB_URL)
console.log(process.env.MONGODB_URL)

app.set("view engine","ejs")
app.set("views",path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/url',restrictToLoggedInUserOnly,urlRouter);
app.use('/user',userRoute)
app.use('/',staticRoute)

const PORT=process.env.PORT || 8000
app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))
