const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require('../utils/wrapAsync');
const ExpressError=require('../utils/ExpressError');
const Review=require('../models/review');
const Events=require('../models/eventListing');
const {vaildateReview,isLoggedIn, isReviewAuthor}=require('../middleware.js');

const reviewController=require('../controllers/reviews.js')

//Review create route
router.post("/",isLoggedIn,
    vaildateReview,wrapAsync(reviewController.createReview));

//Review delete route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.deleteRev))

module.exports=router;