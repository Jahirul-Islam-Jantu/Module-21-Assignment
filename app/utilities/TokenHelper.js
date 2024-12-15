import jwt from "jsonwebtoken";
import {JWT_SECRET, JWT_EXPIRATION_TIME} from "../config/config.js";


export const EncodeToken = (phoneNumber, user_id) => {
    const KEY = JWT_Secret
    const EXPIRE = {expiresIn: JWT_EXPIRATION_TIME}
    const PAYLOAD = {phoneNumber: phoneNumber, user_id: user_id}
    return jwt.sign(PAYLOAD, KEY, EXPIRE)
}


export const DecodeToken = (token) => {
    try {
        const KEY = JWT_SECRET
        return jwt.verify(token, KEY);
    } catch (err) {
        return null;
    }
};
