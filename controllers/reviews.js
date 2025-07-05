const Events=require('../models/eventListing');
const Review=require('../models/review');

module.exports.createReview = async(req,res)=>{
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
}

module.exports.deleteRev = async(req,res)=>{
    let{id,reviewId}=req.params;
    await Events.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});    
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Review deleted!');
    res.redirect(`/events/${id}`);
}