import { DecodeToken } from "../utilities/TokenHelper.js";

export const UserAuthMiddleware = (req, res, next) => {
    const token = req.cookies["authToken"];
    const decodedToken = DecodeToken(token);

    if (!decodedToken) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }


    req.headers._id = decodedToken.user_id;
    req.headers.phoneNumber = decodedToken.phoneNumber;

    next();
};
