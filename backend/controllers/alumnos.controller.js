import { modelo } from "../models/alumnos.model.js";

modelo.create({
    Name:"Rodolfo",
    edad:25
})

export const test = ()=>{
    console.log("Funciona el controlador")
}