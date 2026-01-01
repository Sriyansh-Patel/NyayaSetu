import express from 'express';
import  { addVideo , getVideos, filterVideos,searchVideos } from '../controllers/videoController.js';

const videoRouter = express.Router();

videoRouter.post("/", addVideo);        // POST /api/videos
videoRouter.get("/", getVideos);        // GET /api/videos?page=1
videoRouter.post("/filter", filterVideos); // GET /api/videos/filter?category=...
videoRouter.post("/search", searchVideos); // POST /api/videos/search

export default videoRouter;
