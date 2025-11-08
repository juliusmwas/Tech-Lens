// backend/models/User.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    username: { type: String, required: true, trim: true, unique: true, index: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
    passwordHash: { type: String, required: true },

    bio: { type: String, default: "" },
    avatarUrl: { type: String, default: "" },
    location: { type: String, default: "" },

    // Social / relations
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],

    // If you want to embed article refs:
    articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],

    // analytics
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model("User", userSchema);
