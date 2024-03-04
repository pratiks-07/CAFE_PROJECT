import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"CAFE_PROJECT"
    })
    .then(()=>{
        console.log("connected to database successfully")
    }) 
    .catch(err=>{
        console.error(`Error connecting to the database: ${err}`);
     });
}