import dotenv from "dotenv";
dotenv.config();

export const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION || "mongodb://localhost:27017/Assignment";
export const JWT_SECRET = process.env.JWT_SECRET || "a2f204ef117c76d1258381e576624de49742554e08cdb556d08c03fc7ff70fd1";
export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME

export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE || "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = process.env.REQUEST_LIMIT_TIME || 15 * 60 * 1000;
export const REQUEST_LIMIT_NUMBER = process.env.REQUEST_LIMIT_NUMBER || 3000;

export const WEB_CACHE = true;
export const PORT = process.env.PORT || 8888;
