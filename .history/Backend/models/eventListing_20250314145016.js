const mongoose=require('mongoose');
const Scehma=mongoose.Schema;

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
        enum: ['Conference', 'Workshop', 'Concert', 'Meetup', 'Webinar'], 
        required: true 
    }, // Type of event
    price: { 
        type: Number, 
        default: 0 
    }, 
    organizer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true 
    }, // Reference to user who created the event
    attendees: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }], // List of users attending
    image: { 
        type: String, 
        default: 'default-event.jpg' 
    }, // Image URL
    attendeeCount: { 
        type: Number, 
        default: 0 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    } // Timestamp
});

const events=mongoose.model("events",listingSchema)
module.exports=events;
