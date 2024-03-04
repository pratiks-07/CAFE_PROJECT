import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservation.js";

// async function
export const sendReservation = async (req,res,next)=>{
    const {firstName,lastName,email,phone,date,time}=req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next (new ErrorHandler("Please  fill all fields",400));
    }
    
    try {
        // Create a new Reservation document
        const newReservation = new Reservation({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });
        
        // Save the new Reservation document to the database
        await newReservation.save();
        
        res.status(200).json({
            success: true,
            message : "Reservation Sent Successfully",
        });
    } catch (error) {
        // Handle Mongoose validation errors
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(
                (err)=> err.message
            );
            return next(new ErrorHandler(validationErrors.join(","),400));
        }
        return next(error);
    }
};

export default sendReservation;