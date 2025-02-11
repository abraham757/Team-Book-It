import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/connection";

// Define an interface for Book attributes
interface BookAttributes {
  id: string;
  title: string;
  author: string;
  description?: string;
  apiId: string;
}

// Define an interface for optional fields when creating a new Book
interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

// Extend Sequelize Model
class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: string;
  public title!: string;
  public author!: string;
  public description?: string;
  public apiId!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    apiId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize, // ✅ Use imported sequelize instance
    tableName: "books", // Explicitly set table name
    timestamps: true, // ✅ Keeps track of created_at & updated_at
  }
);

export default Book;
