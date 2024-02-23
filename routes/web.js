const express = require("express");
const FrontController = require("../Controller/FrontController");
const CourseController=require('../Controller/CourseController')
const AdminController=require('../Controller/AdminController')
const route = express.Router();
const checkStudentAuth=require('../middleware/auth')

route.get("/", FrontController.login);
route.get("/about",checkStudentAuth, FrontController.about);
route.get("/register", FrontController.register);
route.get("/dashboard",checkStudentAuth, FrontController.dashboard);
route.get("/contact",checkStudentAuth, FrontController.contact);
route.get("/purchagepage",checkStudentAuth, FrontController.purchagepage);
route.get("/course",checkStudentAuth, FrontController.course);
route.get("/profile",checkStudentAuth, FrontController.profile);
route.get("/logout",checkStudentAuth, FrontController.logout);


route.post('/insertreg', FrontController.insertReg)
route.post('/vlogin', FrontController.vlogin)

//coursecontroller
route.post('/collageinsert',checkStudentAuth, CourseController.collageinsert)
route.get ('/collage_display',checkStudentAuth,CourseController.collageDisplay)
route.get ('/collage_View/:id',checkStudentAuth,CourseController.collageView)
route.get ('/collage_edit/:id',checkStudentAuth,CourseController.collageEdit)
route.get ('/collage_delete/:id',checkStudentAuth,CourseController.collageDelete)
route.post ('/collage_update/:id',checkStudentAuth,CourseController.collageUpdate)

//update profile and password
route.post("/updateProfile",checkStudentAuth, FrontController.updateProfile);
route.post("/updatePassword",checkStudentAuth, FrontController.updatePassword);


//admin controller
route.get("/admin/admindashboard",checkStudentAuth, AdminController.admindashboard)
route.post("/admin/update_status/:id",checkStudentAuth, AdminController.update_status)


//forgot password
route.post("/ForgotPassword",FrontController.ForgotPassword)
route.get('/reset-password',FrontController.reset_Password)
route.post('/reset_Password1',FrontController.reset_Password1)
route.get('/Verify_yourEmail',FrontController.Verify_yourEmail)

module.exports = route;
