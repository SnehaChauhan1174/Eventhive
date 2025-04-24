const express=require("express")
const app=express();
const mongoose=require("mongoose");
const Events=require('./models/eventListing');
const path=require('path');

const MONGO_URL='mongodb://127.0.0.1:27017/EventHive';

main().then(()=>{
    console.log('connected to DB');
})
.catch((err)=>{
   console.log('connected to DB');
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get('/',(req,res)=>{
    res.send('hi root');
})

app.get('/events',async(req,res)=>{
    const allEvents=await Events.find({});
    res.render('events/index.ejs',{allEvents});
})


app.listen(8080,()=>{
    console.log('server is listening to port 8080');
})