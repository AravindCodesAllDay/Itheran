import express, { type Request, type Response } from "express";
import cors, { type CorsOptions } from "cors";
import dotenv from "dotenv";
import { connectDB } from "./core/db.js";

// Load environment variables
dotenv.config();

// Define the main application setup function
async function main() {
  try {
    // ------------------------------------------------------------------------
    // Database Connection
    // ------------------------------------------------------------------------
    await connectDB();

    const app = express();

    // ------------------------------------------------------------------------
    // CORS Configuration
    // ------------------------------------------------------------------------
    // Parse the allowed origins from a JSON string in environment variables
    const allowedOrigins: string[] = process.env.ORIGINS
      ? JSON.parse(process.env.ORIGINS)
      : [];

    const corsOptions: CorsOptions = {
      // Use a function to dynamically check if the origin is allowed
      origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl, or same-origin)
        if (!origin) return callback(null, true);

        // Check if the origin is explicitly allowed
        if (allowedOrigins.includes(origin)) return callback(null, true);

        // Block other origins
        return callback(
          new Error(`CORS policy violation: Origin '${origin}' not allowed.`)
        );
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    };

    app.use(cors(corsOptions));

    // Trust the first proxy (required for Vercel to correctly identify the request origin/protocol)
    app.set("trust proxy", 1);

    // ------------------------------------------------------------------------
    // Body Parsers
    // ------------------------------------------------------------------------
    app.use(express.json()); // To parse JSON bodies
    app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

    // ------------------------------------------------------------------------
    // Health check
    // ------------------------------------------------------------------------
    app.get("/", (req: Request, res: Response) => {
      // Note: For Vercel, this route (/) is essential for a successful deployment check.
      return res.status(200).json({
        message: "🚀 Server is running successfully...",
        status: "OK",
        environment: process.env.NODE_ENV || "development",
      });
    });

    // ------------------------------------------------------------------------
    // Start server
    // ------------------------------------------------------------------------
    const PORT = process.env.PORT || 3030;

    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("An error occurred during server initialization:", error);
    process.exit(1);
  }
}

// Execute the main function
main();
