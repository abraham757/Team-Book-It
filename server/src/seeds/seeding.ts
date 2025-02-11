import sequelize from "../config/connection";
import User from "../models/User";
import Book from "../models/Book";
import Favorite from "../models/Favorite";
import Review from "../models/Review";
import bcrypt from "bcryptjs";

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Resets database (deletes & recreates tables)
    console.log("✅ Database synced.");

    // Seed Users
    const users = await User.bulkCreate([
      {
        username: "john_doe",
        email: "john@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "jane_doe",
        email: "jane@example.com",
        password: await bcrypt.hash("password456", 10),
      },
    ]);
    console.log("✅ Users seeded.");

    // Seed Books
    const books = await Book.bulkCreate([
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        apiId: "1",
        description: "A novel about the American dream.",
      },
      {
        title: "1984",
        author: "George Orwell",
        apiId: "2",
        description: "A dystopian novel about totalitarianism.",
      },
    ]);
    console.log("✅ Books seeded.");

    // Seed Reviews
    await Review.bulkCreate([
      {
        userId: users[0].id,
        bookId: books[0].id,
        rating: 5,
        comment: "Amazing book!",
      },
      {
        userId: users[1].id,
        bookId: books[1].id,
        rating: 4,
        comment: "A thought-provoking read!",
      },
    ]);
    console.log("✅ Reviews seeded.");

    // Seed Favorites
    await Favorite.bulkCreate([
      {
        userId: users[0].id,
        bookId: books[1].id,
      },
      {
        userId: users[1].id,
        bookId: books[0].id,
      },
    ]);
    console.log("✅ Favorites seeded.");

    console.log("🎉 Seeding complete!");
    process.exit(0); // Exit the script successfully
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1); // Exit with failure
  }
};

// Run seed function
seedDatabase();
