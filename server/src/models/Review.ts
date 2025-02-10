import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/connection";

// Define an interface for Review attributes
interface ReviewAttributes {
  id: string;
  userId: string;
  bookId: string;
  rating: number;
  comment?: string;
}

// Define an interface for optional fields when creating a new Review
interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> {}

// Extend Sequelize Model
class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public rating!: number;
  public comment?: string;
}

Review.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize, // ✅ Use imported sequelize instance
    tableName: "reviews", // Explicitly set table name
    timestamps: true, // ✅ Keeps track of created_at & updated_at
  }
);

export default Review;
