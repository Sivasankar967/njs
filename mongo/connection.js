const mongoose=require('mongoose');

const connect =()=>{
    mongoose.connect(process.env.URL)
    .then(()=>console.log('Db connected'))
    .catch((err)=>console.log(err))
}

module.exports= connect;  