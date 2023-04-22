import mongoose from "mongoose";
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION);

let db = mongoose.connection;

export default db;
