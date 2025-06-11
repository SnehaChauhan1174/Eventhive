const express=require('express');
const router=express.Router();
const Events=require('../models/eventListing');
const {eventSchema,reviewSchema}=require('../schema.js');
const wrapAsync=require('../utils/wrapAsync');
const ExpressError=require('../utils/ExpressError');


const vaildateEvent=(req,res,next)=>{
    let {error}=eventSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

//all events
router.get('/',async(req,res)=>{
    const allEvents=await Events.find({});
    res.render('events/allEvents.ejs',{allEvents}); 
});

//creating new event
router.get('/new',wrapAsync(async(req,res)=>{
    res.render('events/new.ejs');
}));

//show event
router.get("/:id",wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id).populate("reviews");
    res.render('events/show.ejs',{event});
}));

//create route
router.post('/',vaildateEvent,wrapAsync(async(req,res)=>{
   let result=eventSchema.validate(req.body);
   //making a new event instance
   const newEvent=new Events(req.body.event);
   await newEvent.save();
   res.redirect('/events');

}));

//edit route
router.get('/:id/edit',wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id);
    res.render('events/edit.ejs',{event});
}));

//update route
router.put('/:id',vaildateEvent,wrapAsync(async(req,res)=>{
    // if(!req.body.event){
    //     throw new ExpressError(400,"Send valid data!");
    // }
    let {id}=req.params;
    await Events.findByIdAndUpdate(id,{...req.body.event});//sec argument is an object containing all new values , we are destructuring it so that pass in to update
    res.redirect(`/events/${id}`);
}));

//delete route
router.delete('/:id',wrapAsync(async(req,res)=>{
    let {id}=req.params;
    await Events.findByIdAndDelete(id);
    res.redirect('/events');
}));
// router.get('/',async(req,res)=>{
//     try{
//         const events=await Event.find();//collection mei already data inserted h
//         res.json(events);
//     }catch(error){
//         res.status(500).json({message:'server error',error})
//     }
// })

module.exports=router;