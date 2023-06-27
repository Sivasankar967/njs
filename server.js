const express =require('express')
const dotenv =require('dotenv')
const path =require('path');

const cors =require('cors')


const app=express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get("/",(req,res)=>{
  res.render('UI');
})  

app.listen(process.env.PORT,()=>{
    console.log('server runninng ')
})
