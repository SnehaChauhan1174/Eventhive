const express=require("express");
const router=express.Router({mergeParams:true});
const User=require('../models/user.js');
const wrapAsync = require("../utils/wrapAsync");
const err = require("connect-flash");
const passport=require('passport');
const { saveRedirectUrl } = require("../middleware.js");

const userController=require('../controllers/users.js');

router.get('/signup',(req,res)=>{
    res.render('user/signup.ejs');
})

router.post('/signup',wrapAsync(userController.signup));

router.get('/login',(req,res)=>{
    res.render("user/login.ejs");
})
router.post('/login',saveRedirectUrl,
    passport.authenticate('local',{
        failureRedirect:'/login',
        failureFlash:true
    }),
    userController.login
)
// The GET request to /login serves the HTML login page (with the form).

// When you submit the form, the POST request to /login sends the login data (like username and password) 
// to the same route but with a different HTTP method.

//to verify username that can be done by passport authenticate mthos
//automatically we pass it as a middleware.
//local is a strategy 

router.get('/logout',userController.logout)
module.exports=router;

