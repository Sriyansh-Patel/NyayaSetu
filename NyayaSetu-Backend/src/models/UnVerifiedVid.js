import mongoose from "mongoose";
import { getDbConnection } from "../db/db.js";

const unVerifiedDb = getDbConnection("UnVerifiedVids");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  downloadLink: { type: [String], required: true },
}, { timestamps: true });

// force collection name = "video"
const UnverifiedVideo = unVerifiedDb.models.Video || unVerifiedDb.model("Video", videoSchema, "video");

export default UnverifiedVideo;
