const User =require('../model/Schema.js')

export const userRegister = async(req,res)=>{
    const data = {
        UserName: req.body.Name,
        password: req.body.password

    }

    const checking = await LogInCollection.findOne({Name: req.body.Name })

   try{
    if (checking.Name === req.body.Name && checking.password===req.body.password) {
        res.send("user details already exists")
    }
    else{
        await User.insertMany([data])
    }
   }
   catch{
    res.send("wrong inputs")
   }

    
}


// }

// export const signup = async (req, res)=>{
//     try{
//         // const salt = bcrypt.genSaltSync(10);
//         // const hash = bcrypt.hashSync(req.body.password, salt);
//         const newUser = new User({...req.body});

//         await newUser.save()
//         res.status(200).send("user has been created!")
//     }catch(err){
//         console.log(err)
// }
// }