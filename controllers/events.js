const Events=require('../models/eventListing');
const {eventSchema}=require('../schema.js');

module.exports.index = async(req,res)=>{
    const allEvents=await Events.find({});
    req.flash('success','Welcome to our events!');
    res.render('events/allEvents.ejs',{allEvents}); 
}

module.exports.renderNewForm=async(req,res)=>{
    res.render('events/new.ejs');
}

module.exports.showEvent=async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id)
    .populate({path:"reviews",populate:{path:'author'}})
    .populate("organizer");
    console.log(event);
    if(!event){
        req.flash('error','Event does not exist!');
        res.redirect('/events');
    }
    res.render('events/show.ejs',{event});
}

module.exports.createEvent=async(req,res)=>{
   let result=eventSchema.validate(req.body);
  
   //making a new event instance
   const newEvent=new Events(req.body.event);
   newEvent.organizer=req.user._id;
   await newEvent.save();
   req.flash('success','Your Event listed!');
   res.redirect('/events');

}

module.exports.editEvent=async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id);
    if(!event){
        req.flash('error','Event does not exist!');
        res.redirect('/events');
    }
    req.flash('success','Event edited!');
    res.render('events/edit.ejs',{event});
}

module.exports.update=async(req,res)=>{
    // if(!req.body.event){
    //     throw new ExpressError(400,"Send valid data!");
    // }
    let {id}=req.params;
    await Events.findByIdAndUpdate(id,{...req.body.event});//sec argument is an object containing all new values , we are destructuring it so that pass in to update
    req.flash('success','Event updated!');
    res.redirect(`/events/${id}`);
}

module.exports.delete=async(req,res)=>{
    let {id}=req.params;
    await Events.findByIdAndDelete(id);
    req.flash('success','Event deleted!');
    res.redirect('/events');
}