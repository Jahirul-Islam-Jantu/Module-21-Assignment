import {
    SingleProfileService,
    UserLogInService, UserProfileDeleteService,
    UserRegistratonService,
    UsersProfileService, UsersProfileUpdateService
} from "../service/UserService.js";

export const UserRegistration = async (req, res)=>{
    let result = await UserRegistratonService(req)
    return res.status(200).json({result: result})
}

export const UserLogIn = async (req, res) => {
    let result = await UserLogInService(req);
    if (result.status === "Success") {

        res.cookie("authToken", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
    }
    return res.status(200).json({ result });
};

export const GetAllUsers = async (req, res) => {
    let result = await UsersProfileService()
    return res.status(200).json({result})
}
export const GetSingleProfile = async (req, res) => {
    let result = await SingleProfileService(req)
    return res.status(200).json({result})
}
export const UserProfileUpdate = async (req, res) => {
    let result = await UsersProfileUpdateService(req)
    return res.status(200).json({result})
}
export const DeleteSingleUser = async (req, res) => {
    const result = await UserProfileDeleteService(req);
    if (result.status === "Success") {
        return res.status(200).json(result);
    } else {
        return res.status(400).json(result); // Return 400 for failures
    }
};
