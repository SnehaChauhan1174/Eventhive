const express=require('express');
const router=express.Router();
const Event=require('../models/eventListing');

router.get('/',async(req,res)=>{
    try{
        const events=await Event.find();//collection mei already data inserted h
        res.json(events);
    }catch(error){
        res.status(500).json({message:'server error',error})
    }
})

moduke.exports=router;