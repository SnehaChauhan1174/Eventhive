module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error','You must be logged to create An Event!');
        res.redirect('/login');
    }
    next();
}