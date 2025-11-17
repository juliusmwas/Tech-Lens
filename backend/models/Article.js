import mongoose from "mongoose";
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  title: { type: String, required: true, trim: true },
  excerpt: { type: String, default: "" },
  content: { type: String, default: "" }, // full article body
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  image: { type: String, default: "" },
  tags: [String],
  claps: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  readTime: { type: String, default: "" },
}, { timestamps: true });

export default model("Article", articleSchema);
