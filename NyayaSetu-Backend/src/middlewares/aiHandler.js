import axios from 'axios';
import db from '../db/db.js'; // Ensure your DB export uses 'export default' or named export

export const aiHandler = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "Missing prompt." });

  const metadata = {
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'],
    timestamp: new Date().toISOString()
  };

  try {
    // Audit Log
    await db.chatLogs.create({ data: { ...metadata, prompt } });

    // Forward to n8n
    const n8nResponse = await axios.post(
      process.env.N8N_WEBHOOK_URL,
      { prompt, metadata },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-N8N-SECRET': process.env.N8N_INTERNAL_SECRET 
        }
      }
    );

    return res.status(200).json(n8nResponse.data);
  } catch (error) {
    console.error("Proxy Error:", error.message);
    return res.status(502).json({ error: "Connection error." });
  }
};