const jwt = require('jsonwebtoken');
const StudentModel = require('../models/student');
const CourseModdel= require('../models/course')

const checkStudentAuth= async(req,res,next)=>{
    // console.log('middlewaew auth')
    const {token}=req.cookies;
    // console.log(token)
    if(!token){
        req.flash('error','Unautherized login')
        res.redirect('/')
    }else{
        const data =jwt.verify(token,'anuragkushwah9669907552asdfghjkzxcvbnm')
        // console.log(data)
        const Userdata=await StudentModel.findOne({_id:data.ID})
        req.Userdata=Userdata
        next()
    }
}


module.exports=checkStudentAuth