import {UserLogInService, UserRegistratonService} from "../service/UserService.js";

export const UserRegistration = async (req, res)=>{
    let result = await UserRegistratonService(req)
    return res.status(200).json({result: result})
}

export const UserLogIn = async (req, res) => {
    let result = await UserLogInService(req)
    return res.status(200).json({result:result})
}