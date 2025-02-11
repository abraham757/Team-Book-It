import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/connection";

// Define an interface for User attributes
interface UserAttributes {
  id: string;
  username: string;
  email: string;
  password: string;
}

// Define an interface for optional fields when creating a new User
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Extend Sequelize Model
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public username!: string;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // ✅ Use imported sequelize instance
    tableName: "users", // Explicitly set table name
    timestamps: true, // ✅ Keeps track of created_at & updated_at
  }
);

export default User;
