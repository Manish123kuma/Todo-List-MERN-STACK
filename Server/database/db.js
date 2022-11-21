import mongoose from "mongoose";
import dotenv from 'dotenv';



//  const Connection = () => {

//      MONGODB_URI = 'mongodb://localhost:27017';
//      mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
//      mongoose.connection.on('connected', () => {
//          console.log('Database Connect Sucessfully...');
//      })

//      mongoose.connection.on('disconnected', () => {
//          console.log("Database Disconnected...");
//      })
//      mongoose.connection.on('error', () => {
//          console.log("Error while connecting with the database", error.message);
//      })
// }



dotenv.config();
const DB_NAME = process.env.DB_NAME;


const url = `mongodb://localhost/${DB_NAME}`
const connection = mongoose.connection;
const Connection = () => {
    mongoose.connect(url)
    .then(() => console.log("connection Successful........"))
    .catch((err) => console.log("coccection failed .........."));
}

export default Connection;