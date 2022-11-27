const express=require('express')
const app=express()
const db=require('./db')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()

const Port=process.env.PORT || 5050

const AuthController=require('./controller/authController')
app.use(cors())
app.use('/api/auth',AuthController)

app.listen(Port,()=>{
    console.log(`server listining at ${Port}`)
})