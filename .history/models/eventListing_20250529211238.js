const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Review=require("./review.js");

const eventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 

    },  
    description: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    }, 
    time: { 
        type: String, 
        required: true 
    }, 
    location: { 
        type: String, 
        required: true 
    }, 
    category: { 
        type: String, 
        enum: ['Conference', 'Workshop', 'Concert', 'Meetup', 'Webinar','Fashion Show','Press Conference','Theatre','Cultural Event','Sports Events','Wellness',
            'Awareness','Exhibition','Entertainment','Science','Technical Event'
        ], 
        required: true 
    }, // Type of event
    price: { 
        type: Number, 
        default: 0 
    }, 
    // organizer: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'User', required: true 
    // }, // Reference to user who created the event
    // attendees: [{ 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'User' 
    // }], // List of users attending
    attendeeCount: { 
        type: Number, 
        default: 0 
    },
    image: { 
        type: String, 
        default: 'default-event.jpg' 
    }, // Image URL
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    
    
});

eventSchema.post("findOneAndDelete",async(event)=>{
    if(event){
        await Review.deleteMany({_id:{$in:event.reviews}})
    }
})

const events=mongoose.model("events",eventSchema)
module.exports=events;
//Event is a model and events is a collection
