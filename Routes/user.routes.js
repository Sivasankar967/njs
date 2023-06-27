const exprees =require('express')
const userRegister =require('../controllers/user.controllers')

const router =exprees.Router()
const app =express()

app.post("/register" ,userRegister)
app.post('/home')


module.exports={
    router
}