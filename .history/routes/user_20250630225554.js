const express=require("express");
const router=express.Router({mergeParams:true});
const User=require('../models/user.js');
const wrapAsync = require("../utils/wrapAsync");
const err = require("connect-flash");
const passport=require('passport');
const { saveRedirectUrl } = require("../middleware.js");


router.get('/signup',(req,res)=>{
    res.render('user/signup.ejs');
})

router.post('/signup',wrapAsync(async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        //ab hume ek new user create krna h uske liye user model require krna pdega
        const newUser=new User({email,username,password});
        const registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash('success','User got registered!');
            res.redirect('/events');
        })
        

    }catch(err){
        req.flash('error',err.message);
        res.redirect('/signup');
    }
    
}))

router.get('/login',(req,res)=>{
    res.render("user/login.ejs");
})
router.post('/login',saveRedirectUrl,
    passport.authenticate('local',{
        failureRedirect:'/login',
        failureFlash:true
    }),
    async(req,res)=>{
       req.flash('success','Logged In');
       res.redirect(res.locals.redirectUrl);
    }
)
// The GET request to /login serves the HTML login page (with the form).

// When you submit the form, the POST request to /login sends the login data (like username and password) 
// to the same route but with a different HTTP method.

//to verify username that can be done by passport authenticate mthos
//automatically we pass it as a middleware.
//local is a strategy 

router.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash('success','you are logged out!');
        res.redirect('/events');
    })
})
module.exports=router;

