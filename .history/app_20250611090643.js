const express=require("express")
const app=express();
const mongoose=require("mongoose");
const Events=require('./models/eventListing');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const wrapAsync=require('./utils/wrapAsync');
const ExpressError=require('./utils/ExpressError');
const {eventSchema,reviewSchema}=require('./schema.js');
const Review=require('./models/review');

const events=require('./routes/events.js');
const reviews=require('./routes/review.js');

const MONGO_URL='mongodb://127.0.0.1:27017/EventHive';

main().then(()=>{
    console.log('connected to DB');
})
.catch((err)=>{
   console.log('connected to DB');
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));

app.use(methodOverride('_method'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,'/public')));


async function main(){
    await mongoose.connect(MONGO_URL);
}

const vaildateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

app.get('/home',(req,res)=>{
    res.send('hi root');
});

app.use('/events',events);




//Review create route
app.post("/events/:id/reviews",vaildateReview,wrapAsync(async(req,res)=>{
    let event = await Events.findById(req.params.id);
    let newReview = new Review(req.body.review);
    event.reviews.push(newReview);
    await newReview.save();
    await event.save();
    console.log("new review saved");
    res.redirect(`/events/${event._id}`);
}));

//Review delete route
app.delete("/events/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
    let{id,reviewId}=req.params;
    await Events.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});    
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/events/${id}`);
}))

//catch all unmatched routes
app.use("*",(re,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
});

app.use((err,req,res,next)=>{
    let {statusCode = 500, message = "Something went wrong!"}=err
    res.status(statusCode).render('error.ejs',{err});
});

app.listen(8080,()=>{

    console.log('server is listening to port 8080');
});