import rateLimit from 'express-rate-limit';

export const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 20, 
  message: { error: "Too many requests. Please wait." }
});