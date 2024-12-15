import {DecodeToken} from "../utilities/TokenHelper.js";
export const UserAuthMiddleware = (req, res, next) => {
    let token = req.headers["token"];
    let decodeToken = DecodeToken(token);

    if (!decodeToken) {
        res.status(401).json({ error: "Invalid or expired token" });
    } else {
        req.headers.phoneNumber = decodeToken.phoneNumber;
        next();
    }
};