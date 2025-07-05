const Events=require('./models/eventListing');
const {eventSchema,reviewSchema}=require('./schema.js');
const ExpressError=require('./utils/ExpressError');


module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash('error','You must be logged to create An Event!');
        res.redirect('/login');
    }
    next();
}
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
       res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
    
}

module.exports.isOwner=async(res,req,next)=>{
    let {id}=req.params;
    let event = await Events.findById(id);
    if(!event.organizer.equals(res.locals.currUser._id)){
        req.flash("error","You are not an organizer of this event!");
        return res.redirect(`/events/${id}`);
    }
    next();
}

module.exports.vaildateEvent=(req,res,next)=>{
    let {error}=eventSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.vaildateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}