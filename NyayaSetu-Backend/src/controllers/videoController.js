import Video from '../models/Video.js';
import UnverifiedVideo from '../models/UnVerifiedVid.js';
// This file contains the logic for handling video-related requests.
// This is mock data; in a real app, you would fetch from a database.


export const getVideos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default page = 1
    const limit = 6;
    const skip = (page - 1) * limit;

    const [videos, total] = await Promise.all([
      Video.find().skip(skip).limit(limit),
      Video.countDocuments()
    ]);

    res.status(200).json({
      page,
      totalPages: Math.ceil(total / limit),
      totalVideos: total,
      videos,
    });
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addVideo = async (req, res) => {
  console.log("Incoming body:", req.body); // 👀 debug here

  try {
    const { title, category, year, description, thumbnail, downloadLink } = req.body;

    if (!title || !thumbnail || !downloadLink) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVideo = new UnverifiedVideo({ title, category, year, description, thumbnail, downloadLink });
    await newVideo.save();

    res.status(201).json({ message: "Video added successfully", video: newVideo });
  } catch (error) {
    console.error("Error adding video:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};




export const filterVideos = (req, res) => {
  const { category, year, query } = req.query;
  let filteredVideos = [...mockVideos];

  // Filter by category if provided
  if (category && category !== 'All') {
    filteredVideos = filteredVideos.filter(video => video.category === category);
  }

  // Filter by year if provided
  if (year && year !== 'All Years') {
    filteredVideos = filteredVideos.filter(video => video.year.toString() === year);
  }

  // Filter by search query if provided
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredVideos = filteredVideos.filter(video =>
      video.title.toLowerCase().includes(searchQuery)
    );
  }

  res.status(200).json(filteredVideos);
};

export const searchVideos = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }


    const searchCriteria = {
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
     
      ]
    };


    const matchedVideos = await Video.find(searchCriteria).limit(100);

    // ----------------------------------------------------

    if (matchedVideos.length === 0) {
      // It's helpful to send a 404 (Not Found) status when no results match the query
      return res.status(404).json({ message: "No videos found matching your query." });
    }

    res.status(200).json(matchedVideos);

  } catch (error) {
    console.error("Error searching videos:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}