import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT,
  db: process.env.DATABASE_URL,
  jwt: process.env.JWT_SECRET,
};
