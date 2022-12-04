import mongoose from 'mongoose';
import 'dotenv/config';

const {
  DB_USERNAME, DB_PASSWORD, DB_HOST, DB_LOCAL_PORT, DB_NAME,
} = process.env;

const MONGO_URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_LOCAL_PORT}/${DB_NAME}?authSource=admin`;

export const connect = (mongoURI = MONGO_URI) => mongoose.connect(mongoURI);
