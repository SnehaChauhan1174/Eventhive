const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require('../utils/wrapAsync');
const ExpressError=require('../utils/ExpressError');
const Review=require('../models/review');
const Events=require('../models/eventListing');
const {vaildateReview,isLoggedIn, isReviewAuthor}=require('../middleware.js');

//Review create route
router.post("/",isLoggedIn,
    vaildateReview,wrapAsync(async(req,res)=>{
    console.log(req.params.id);
    let event = await Events.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    event.reviews.push(newReview);
    await newReview.save();
    await event.save();
    console.log("new review saved");
    req.flash('success','Your review added!');
    res.redirect(`/events/${event._id}`);
}));

//Review delete route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(async(req,res)=>{
    let{id,reviewId}=req.params;
    await Events.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});    
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Review deleted!');
    res.redirect(`/events/${id}`);
}))

module.exports=router;