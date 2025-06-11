const express=require("express");
const router=express.Router();
const {eventSchema,reviewSchema}=require('../schema.js');
const wrapAsync=require('../utils/wrapAsync');
const ExpressError=require('../utils/ExpressError');
const Review=require('../models/review');
const Events=require('../models/eventListing');

const vaildateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

//Review create route
router.post("/",vaildateReview,wrapAsync(async(req,res)=>{
    console.log(req.params.id);
    let event = await Events.findById(req.params.id);
    let newReview = new Review(req.body.review);
    event.reviews.push(newReview);
    await newReview.save();
    await event.save();
    console.log("new review saved");
    res.redirect(`/events/${event._id}`);
}));

//Review delete route
router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let{id,reviewId}=req.params;
    await Events.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});    
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/events/${id}`);
}))

module.exports=router;