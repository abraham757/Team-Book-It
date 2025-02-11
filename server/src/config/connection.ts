import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Check if using a remote PostgreSQL database
const isUsingRemoteDB = Boolean(process.env.DB_URL);

const sequelize = isUsingRemoteDB
  ? new Sequelize(process.env.DB_URL as string, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Allows self-signed certs for Render
        },
      },
      logging: false, // Disables excessive logs in production
    })
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
        logging: console.log, // Enables logging for debugging locally
      }
    );

// Function to check and log the connection
async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');

    if (isUsingRemoteDB) {
      console.log(`🌍 Connected to REMOTE database: ${process.env.DB_URL}`);
    } else {
      console.log(
        `💻 Connected to LOCAL database: ${sequelize.config.database} at host ${sequelize.config.host}`
      );
    }
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
}

// Call the function to log connection details
checkConnection();

export default sequelize;
