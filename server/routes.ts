import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for newsletter subscription
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Valid email is required' });
      }
      
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // In a real app, you would save this to a database
      // For now, we'll just return success
      return res.status(200).json({ 
        message: 'Subscription successful',
        email
      });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return res.status(500).json({ message: 'An unexpected error occurred' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
