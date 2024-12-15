import {
    SingleProfileService,
    UserLogInService,
    UserRegistratonService,
    UsersProfileService
} from "../service/UserService.js";

export const UserRegistration = async (req, res)=>{
    let result = await UserRegistratonService(req)
    return res.status(200).json({result: result})
}

export const UserLogIn = async (req, res) => {
    let result = await UserLogInService(req)
    return res.status(200).json({result:result})
}

export const GetAllUsers = async (req, res) => {
    let result = await UsersProfileService()
    return res.status(200).json({result})
}
export const GetSingleProfile = async (req, res) => {
    let result = await SingleProfileService(req)
    return res.status(200).json({result})
}