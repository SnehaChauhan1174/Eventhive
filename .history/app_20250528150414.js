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
app.use(express.json())

async function main(){
    await mongoose.connect(MONGO_URL);
}

const vaildateEvent=(req,res,next)=>{
    let {error}=eventSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}
const vaildateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body.review);
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

//all events
app.get('/events',async(req,res)=>{
    const allEvents=await Events.find({});
    res.render('events/allEvents.ejs',{allEvents}); 
});

//creating new event
app.get('/events/new',wrapAsync(async(req,res)=>{
    res.render('events/new.ejs');
}));

//show event
app.get("/events/:id",wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id);
    res.render('events/show.ejs',{event});
}));

//create route
app.post('/events',vaildateEvent,wrapAsync(async(req,res)=>{
   let result=eventSchema.validate(req.body);
   //making a new event instance
   const newEvent=new Events(req.body.event);
   await newEvent.save();
   res.redirect('/events');

}));

//edit route
app.get('/events/:id/edit',wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id);
    res.render('events/edit.ejs',{event});
}));

//update route
app.put('/events/:id',vaildateEvent,wrapAsync(async(req,res)=>{
    // if(!req.body.event){
    //     throw new ExpressError(400,"Send valid data!");
    // }
    let {id}=req.params;
    await Events.findByIdAndUpdate(id,{...req.body.event});//sec argument is an object containing all new values , we are destructuring it so that pass in to update
    res.redirect(`/events/${id}`);
}));

//delete route
app.delete('/events/:id',wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Events.findByIdAndDelete(id);
    res.redirect('/events');
}));

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