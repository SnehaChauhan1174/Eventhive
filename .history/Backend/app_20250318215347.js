const express=require("express")
const app=express();
const mongoose=require("mongoose");
const eventRoutes=require('./routes/events.js');

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

app.get('/',(req,res)=>{
    res.send('hi root');
})
app.use('/events',eventRoutes);

app.listen(8080,()=>{
    console.log('server is listening to port 8080');
})