import mongoose from 'mongoose';
import 'dotenv/config';

const {
  DB_USERNAME, DB_PASSWORD, DB_HOST, DB_LOCAL_PORT, DB_NAME,
} = process.env;

export const MONGO_URI_DEV = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_LOCAL_PORT}/${DB_NAME}?authSource=admin`;

export const MONGO_URI_TEST = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_LOCAL_PORT}/Testing?authSource=admin`;

export const connect = async (mongoURI = MONGO_URI_DEV) => mongoose.connect(mongoURI);

export const disconnect = async () => mongoose.connection.close();
