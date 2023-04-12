import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guimrl:wgAE3Plc75FSqjzw@mini-projetos.npi5os3.mongodb.net/mini-projetos");

let db = mongoose.connection;

export default db;
