import { createApp } from "../server/adapter";

// Create the Express app
const app = await createApp();

// Export the Express API for Vercel serverless functions
export default app;
