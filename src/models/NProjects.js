import mongoose from "mongoose";

const nProjectsSchema = new mongoose.Schema(
    {
        image:          { type: String },
        title:          { type: String },
        alt:            { type: String },
        description:    { type: String },
        url:            { type: String },
        id:             { type: Number }
    },
    {
        versionKey: false
    }
);

const nProjects = mongoose.model("nProjects", nProjectsSchema);

export default nProjects;
