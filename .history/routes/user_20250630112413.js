const express=require("express");
const router=express.Router({mergeParams:true});
const User=require('../models/user.js');

router.get('/signup',(req,res)=>{
    res.render('user/signup.ejs');
})

router.post('/signup',async(req,res)=>{
    let {username,email,password}=req.body;
    //ab hume ek new user create krna h uske liye user model require krna pdega
    const newUser=new User({email,username,password});
    const registeredUser=await User.register(newUser,password);
    console.log(registeredUser);
    req.flash('success','user was registered!');
    res.redirect('/events');
})
module.exports=router;