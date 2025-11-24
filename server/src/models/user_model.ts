import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

// Define the User document interface
export interface IUser extends Document {
  username: string;
  email: string;
  password_hash: string;
  createdAt: Date;
  updatedAt: Date;
  // Method for comparing passwords
  comparePassword(password: string): Promise<boolean>;
}

// Define the User Schema
const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "is invalid"], // Basic email format validation
    },
    password_hash: {
      type: String,
      required: [true, "Password is required"],
      // Note: We will store the HASHED password here
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// --- Pre-save hook to hash the password ---
UserSchema.pre<IUser>("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (this.isModified("password_hash")) {
    const salt = await bcrypt.genSalt(10);
    this.password_hash = await bcrypt.hash(this.password_hash, salt);
  }
  next();
});

// --- Method to compare input password with the stored hash ---
UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password_hash);
};

// Export the Mongoose model
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
