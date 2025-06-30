const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const passportLocalMong=require('passport-local-mongoose');
let Event=require('./eventListing.js')

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    // role:{
    //    type:String,
    //    enum:['attendee','organizer'],
    //    default:'attendee'
    // },
    createdAt:{type:Date,default:Date.now},
    
    // eventsCreated:[//for organizers
    //     {type:Schema.Types.ObjectId,
    //         ref:'Event'
    //     }
    // ],
    // eventsBooked:[//for attendees
    //     {type:Schema.Types.ObjectId,
    //         ref:'Event'
    //     }
    // ],
    isVerified:{
        type:Boolean,
        default:false
    },
}) 

userSchema.plugin(passportLocalMong);
module.exports=mongoose.model('User',userSchema);
