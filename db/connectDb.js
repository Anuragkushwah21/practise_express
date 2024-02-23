const mongoose=require('mongoose')
const connectDb=()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/admisssion1230')
    .then(()=>{
        console.log('connected sucessfully')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDb;
