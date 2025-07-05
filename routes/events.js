const express=require('express');
const router=express.Router();
const Events=require('../models/eventListing');
const {eventSchema,reviewSchema}=require('../schema.js');
const wrapAsync=require('../utils/wrapAsync');
const ExpressError=require('../utils/ExpressError');
const {isLoggedIn, isOwner,vaildateEvent}=require('../middleware.js');

const eventController=require('../controllers/events.js');
//all events
router.get('/',wrapAsync(eventController.index));

//creating new event
router.get('/new',isLoggedIn,wrapAsync(eventController.renderNewForm));

//show event
router.get("/:id",wrapAsync(eventController.showEvent));

//create route
router.post('/',
    vaildateEvent,wrapAsync(eventController.createEvent));

//edit route
router.get('/:id/edit',isLoggedIn,isOwner,
    wrapAsync(eventController.editEvent));

//update route
router.put('/:id',isLoggedIn,
    isOwner,
    vaildateEvent,wrapAsync(eventController.update));

//delete route
router.delete('/:id',isLoggedIn,isOwner,
    wrapAsync(eventController.delete));


module.exports=router;