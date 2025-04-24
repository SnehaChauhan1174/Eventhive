const express=require("express")
const app=express();
const mongoose=require("mongoose");
const Events=require('./models/eventListing');
const path=require('path');
const methodOverride=require('method-override');

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

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get('/home',(req,res)=>{
    res.send('hi root');
})

//all events
app.get('/events',async(req,res)=>{
    const allEvents=await Events.find({});
    res.render('events/allEvents.ejs',{allEvents});
})

//creating new event
app.get('/events/new',async(req,res)=>{
    res.render('events/new.ejs');
})

//show event
app.get("/events/:id",async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id);
    res.render('events/show.ejs',{event});
})

//create route
app.post('/events',async(req,res)=>{
   let event=req.body.event;
   //making a new event instance
   const newEvent=new Events(req.body);
   await newEvent.save();
   res.redirect('/events');
   console.log(event);
})

//edit route
app.get('/events/:id/edit',async(req,res)=>{
    const {id}=req.params;
    const event=await Events.findById(id);
    res.render('events/edit.ejs',{event});
})

//update route
app.put('/events/:id',async(req,res)=>{
    let {id}=req.params;
    await Events.findByIdAndUpdate(id,{...req.body.event});//sec argument is an object containing all new values , we are destructuring it so that pass in to update
    res.redirect(`/events/${id}`);
})

//delete route
app.delete('/events/:id',async(req,res)=>{
    let {id}=req.params;
    await Events.findByIdAndDelete(id);
})
app.listen(8080,()=>{

    console.log('server is listening to port 8080');
})