const express=require("express");
const router=express.Router({mergeParams:true});
const User=require('../models/user.js');
const wrapAsync = require("../utils/wrapAsync");
const e = require("connect-flash");

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
        req.flash('success','User got registered!');
        res.redirect('/events');

    }catch(err){
        req.flash('error',e.message);
        res.redirect('/signup');
    }
    
}))
module.exports=router;