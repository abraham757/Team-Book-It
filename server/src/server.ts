import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/connection";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";
import favoriteRoutes from "./routes/favoriteRoutes";
import reviewRoutes from "./routes/reviewRoutes";

dotenv.config();
console.log("📌 Loaded JWT_SECRET:", process.env.JWT_SECRET); // ✅ Debugging log

const app = express();

// ✅ Enable CORS for frontend access
app.use(cors({
  origin: [
    "http://localhost:5173", // Para desarrollo local
    "https://team-book-it-13rh.onrender.com", // Reemplaza con la URL de tu frontend en Render
  ],
  credentials: true
}));

app.use(express.json());



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
