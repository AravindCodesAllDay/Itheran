import express, { type Request, type Response } from "express";
import cors, { type CorsOptions } from "cors";
import dotenv from "dotenv";
import { connectDB } from "./core/db.js";

dotenv.config();

const app = express();

// 1. Connect to DB (Note: In serverless, connection logic is slightly different,
// but strictly for this fix, we will initiate it here)
connectDB();

// 2. Middleware
const allowedOrigins: string[] = process.env.ORIGINS
  ? JSON.parse(process.env.ORIGINS)
  : [];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(
      new Error(`CORS policy violation: Origin '${origin}' not allowed.`)
    );
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Routes
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "🚀 Server is running successfully...",
    status: "OK",
    environment: process.env.NODE_ENV || "development",
  });
});

// 4. Start Server (LOCAL ONLY)
// We only run app.listen if we are NOT in production (Vercel manages the port in prod)
// OR if we run the file directly.
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
}

// 5. EXPORT THE APP (REQUIRED FOR VERCEL)
export default app;
