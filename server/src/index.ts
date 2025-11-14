import express, { type Request, type Response } from "express";
import cors, { type CorsOptions } from "cors";
import dotenv from "dotenv";
import { connectDB } from "./core/db.js";

// Load env
dotenv.config();

await connectDB();

const app = express();

// ------------------------------------------------------------------------
// CORS Configuration (typed)
// ------------------------------------------------------------------------
const allowedOrigins = process.env.ORIGINGS
  ? JSON.parse(process.env.ORIGINGS)
  : [];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.set("trust proxy", 1);

// ------------------------------------------------------------------------
// Health check
// ------------------------------------------------------------------------
app.get("/", (req: Request, res: Response) => {
  return res.send({
    message: "🚀 Server is running successfully...",
  });
});

// ------------------------------------------------------------------------
// Start server
// ------------------------------------------------------------------------
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
