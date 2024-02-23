const CourseModel = require('../models/course');
class CourseController {
  static collageinsert = async (req, res) => {
    try {
      // console.log(req.body)
      const { name, email, phone, dob, address, gender, education, course } = req.body;
      // console.log(result)
      const result = new CourseModel({
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        address: address,
        gender: gender,
        education: education,
        course: course,
        user_id:req.Userdata._id

      })
      await result.save()
      res.redirect('/collage_display')

    } catch (error) {
      console.log(error)
    }
  };
  static collageDisplay = async (req, res) => {
    try {
      // console.log("insert")
      const { name, image,} = req.Userdata;
      const data = await CourseModel.find({user_id:req.Userdata._id})
      // console.log(data)
      res.render('course/display', { d: data, n: name, i: image,msg:req.flash('success') })
    } catch (error) {
      console.log(error)
    }
  }
  static collageView = async (req, res) => {
    try {
      const { name, image } = req.Userdata;
      // console.log(req.params.id)
      const data = await CourseModel.findById(req.params.id)
      // console.log(data)
      res.render('course/view', { d: data, n: name, i: image })
    } catch (error) {
      console.log(error)
    }
  }
  static collageEdit = async (req, res) => {
    try {
      const { name, image } = req.Userdata;
      // console.log(req.params.id)
      const data = await CourseModel.findById(req.params.id)
      // console.log(data)
      res.render('course/edit', { d: data, n: name, i: image })
    } catch (error) {
      console.log(error)
    }
  }
  static collageDelete = async (req, res) => {
    try {
      const data = await CourseModel.findByIdAndDelete(req.params.id)
      // console.log(data)
      req.flash("success","Course Delete successfully")
      res.redirect('/collage_display')
    } catch (error) {
      console.log(error)
    }
  }
  static collageUpdate = async (req, res) => {
    try {
      const { name, email, phone, dob, address, gender, education, course } = req.body;
      await CourseModel.findByIdAndUpdate(req.params.id, {
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        address: address,
        gender: gender,
        education: education,
        course: course,
      })
      // console.log(data)
      req.flash("success","Course Update successfully")
      res.redirect('/collage_display')
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = CourseController