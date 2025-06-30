const mongoose=require('mongoose');
const initData=require('./data.js');
const EventListing=require('../models/eventListing.js')

//connection establish krne ke liye
const MONGO_URL='mongodb://127.0.0.1:27017/EventHive';

main().then(()=>{
    console.log('connected to DB');
})
.catch((err)=>{
   console.log('connected to DB');
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await EventListing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,organizer:"6862c458c46189ce19515565"}));
    await EventListing.insertMany(initData.data);
    console.log('data was intialized');
}

initDB();
