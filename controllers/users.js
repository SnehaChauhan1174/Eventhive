const User=require('../models/user.js');

module.exports.signup = async(req,res)=>{
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
    
}

module.exports.login = async(req,res)=>{
       req.flash('success','Logged In');
       const redirect=res.locals.redirectUrl || '/events'; 
       res.redirect(redirect);
}

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash('success','you are logged out!');
        res.redirect('/events');
    })
}