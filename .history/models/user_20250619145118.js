const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const passportLocalMong=require('passport-local-mongoose');

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    }
}) 

UserActivation.pugin(passportLocalMong);
modeule.exports=mongoose.model('User',userSchema);
