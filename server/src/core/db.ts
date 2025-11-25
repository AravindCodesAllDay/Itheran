import mongoose, { MongooseError } from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      // Use a standard Error for better clarity
      throw new Error("Missing MONGODB_URI in environment variables");
    }

    // Mongoose automatically uses connection pooling starting from version 4.1.0
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    // Check if the error is a MongooseError or general Error and log the message
    if (error instanceof Error) {
      console.error("MongoDB connection error:", error.message);
    } else {
      console.error("MongoDB connection error: An unknown error occurred");
    }
    // Exit the process on connection failure
    process.exit(1);
  }
};
