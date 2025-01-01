import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appRoutes from './appRoutes.js';
import { dbConnect } from './config/databaseConfig.js';

dotenv.config();

//constants
const PORT =process.env.PORT;
const MONGO_URI=process.env.MONGO_URI

const app= express();

//body passsing
app.use(express.json())

//internal routes
app.use(appRoutes);


// Database connection
   // dbConnect()


//server
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
    })