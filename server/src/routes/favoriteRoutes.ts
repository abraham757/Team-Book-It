import express from "express";
import Favorite from "../models/Favorite";
import authMiddleware, { AuthenticatedRequest } from "../middlewares/authMiddleware"; // ✅ Import correctly

const router = express.Router();

// ✅ Add a favorite book
router.post("/", authMiddleware, async (req: AuthenticatedRequest, res) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const { bookId } = req.body;

    if (!bookId) {
      return res.status(400).json({ error: "bookId is required" });
    }

    // Check if the book is already in the user's favorites
    const existingFavorite = await Favorite.findOne({
      where: { userId: req.user.userId, bookId }
    });

    if (existingFavorite) {
      return res.status(400).json({ error: "Book is already in favorites" });
    }

    const favorite = await Favorite.create({
      userId: req.user.userId,
      bookId
    });

    res.status(201).json(favorite);
  } catch (error) {
    console.error("❌ Error adding favorite:", error);
    res.status(500).json({ error: "Failed to add favorite" });
  }
});


// ✅ Get all favorite books for the authenticated user
router.get("/", authMiddleware, async (req: AuthenticatedRequest, res) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const favorites = await Favorite.findAll({ where: { userId: req.user.userId } });
    res.json(favorites);
  } catch (error) {
    console.error("❌ Error fetching favorites:", error);
    res.status(500).json({ error: "Failed to retrieve favorites" });
  }
});

export default router;
