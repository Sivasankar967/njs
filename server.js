const express =require('express')
const path =require('path');
const config = require("./config/index.js")
const connect=require('./mongo/connection.js');





const app=express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.set('views',path.join(__dirname,'view'));
app.set('view engine','ejs');
app.use('/public', express.static('public'));

app.use("/login",(req,res)=>{
  res.render('Login')
})  
app.use("/",(req,res)=>{
  res.render('Register')
});
app.use("/home",(req,res)=>{
  res.render('home')
});

app.listen(config.PORT,()=>{
  connect()
    console.log('server runninng : ' + config.PORT)
})
