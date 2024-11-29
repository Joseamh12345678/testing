import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/controllers/alumnos.controller.js";

dotenv.config();
mongoose.connect(process.env.url_base)
.then(()=>{
    console.log("Jala esta madre")
}).catch((error)=>{
    console.log("no funciona esta madre", error)
})

const app = express();
app.use(cors());
app.listen(4001, ()=>{
    console.log('Se escucha correcto, no escucha borroso')
})
test()