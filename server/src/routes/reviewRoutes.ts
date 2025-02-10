import express from "express";
import Review from "../models/Review";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/reviews", async (req: AuthenticatedRequest, res) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const { bookId, rating, comment } = req.body;
    try {
        const review = await Review.create({ userId: req.user.userId, bookId, rating, comment });
        res.status(201).json(review);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

export default router;
