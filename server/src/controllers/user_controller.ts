import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user_model.js";

// Replace with a strong, secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your_default_jwt_secret";
const JWT_EXPIRES_IN = "1d"; // Token expiry time

/**
 * Generates a JSON Web Token (JWT) for a user.
 * @param user The user object to encode in the token.
 * @returns The signed JWT string.
 */
const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

/**
 * Handles user registration.
 * POST /api/register
 */
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // 1. Check if user already exists
    let existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email or username already exists." });
    }

    // 2. Create and save the new user (password hashing is done in the model's pre-save hook)
    const newUser = new User({
      username,
      email,
      // Temporarily use 'password' field name before pre-save hook changes it to 'password_hash'
      password_hash: password,
    });
    const savedUser = await newUser.save();

    // 3. Generate JWT
    const token = generateToken(savedUser);

    // 4. Send response
    res.status(201).json({
      status: "success",
      token,
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
};

/**
 * Handles user login.
 * POST /api/login
 */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 2. Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Generate JWT
    const token = generateToken(user);

    // 4. Send response
    res.status(200).json({
      status: "success",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login." });
  }
};
