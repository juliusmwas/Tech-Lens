// backend/routes/userRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import User from "../models/User.js";
import { upload } from "../config/cloudinary.js";

const router = express.Router();

// ✅ Get current user
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Fetch user error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update user profile (with optional avatar)
router.put("/me", protect, upload.single("avatar"), async (req, res) => {
  try {
    const { username, email, bio, twitter, github, website } = req.body;
    const updateData = { username, email, bio, twitter, github, website };

    // If user uploaded a new avatar
    if (req.file && req.file.path) {
      updateData.avatarUrl = req.file.path; // Cloudinary URL
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
