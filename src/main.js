import express from "express";
import cors from "cors";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
    console.log("Database connection was successful");
});

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    //console.log("on middleware!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    app.use(cors());
    next();
});

routes(app);

export default app;
