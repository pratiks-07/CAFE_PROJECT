import mongoose from "mongoose";
import  validator  from "validator";

const reservation = new  mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        minLength:[3, "First name must contain at least 3 charactersters!"],
        maxLength:[30, "First name cannot exceed 30 charactersters!"],

    },

    lastName:{
        type:String,
        required:true,
        minLength:[3, "Last name must contain at least 3 charactersters!"],
        maxLength:[30, "Last name cannot exceed 30 charactersters!"],

    },

    email:{
        type: String,
        required:true,
        validator:[validator.isEmail,"Please provide a valid Email address!"]
    },

    phone:{
        type:String,
        required:true,
        minLength:[10, "Phone number must contain only 10 digit!"],
        maxLength:[10,"Phone number must contain only 10 digit!"],

    },

    time:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },
});

export const Reservation = mongoose.model( 'Reservation', reservation );



    


