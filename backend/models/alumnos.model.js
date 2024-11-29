import{Schema, model} from "mongoose";

const Esquemas = new Schema({
    name: String,
    Edad: Number
})
export const modelo = new model("Tabla de alumnos", Esquemas)