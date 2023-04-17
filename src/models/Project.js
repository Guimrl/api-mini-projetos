import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    id:     { type: String },
    title:  { type: String, required: true },
    url:    { type: String, required: true },
});

const projects = mongoose.model("projects", projectSchema);

export default projects;
