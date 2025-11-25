import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import { connectDB } from "./core/db.js";

dotenv.config();

// Create Express app (serverless compatible)
const app = express();

// Connect DB on first request only (prevents cold start errors)
let isDBConnected = false;
async function ensureDB() {
  if (!isDBConnected) {
    await connectDB();
    isDBConnected = true;
  }
}

// CORS
const allowedOrigins: string[] = process.env.ORIGINS
  ? JSON.parse(process.env.ORIGINS)
  : [];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.set("trust proxy", 1);

// Health Check
app.get("/", async (req: Request, res: Response) => {
  await ensureDB();
  res.status(200).json({ message: "Server running on Vercel!" });
});

// Export serverless Express app
export default app;
