import UserModel from "../model/UserModel.js";
import {EncodeToken} from "../utilities/TokenHelper.js"


export const UserRegistratonService = async (req)=>{
    try{
        let reqBody = req.body;
        let data = await UserModel.create(reqBody)
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}

export const UserLogInService = async (req)=>{
    try{
        let reqBody = req.body
        console.log(reqBody)
        let user = await UserModel.findOne({phoneNumber:reqBody.phoneNumber})
        if (user){
            const token = EncodeToken(user.phoneNumber, user._id)
            return ({status:"Success", user:user, token:token})
        }
        else{
            return ({status: "fail"})
        }
    }catch(error){
        return ({status:"error", message:"Failed login attemp"})
    }
}

export const SingleProfileService = async (req)=>{
    try{
        let id = req.headers._id
        let phoneNumber = req.headers.phoneNumber
        let user = await UserModel.findOne({phoneNumber:phoneNumber, id:id})
        return ({status:"Success", user:user})
    }catch(error){
        return ({status:"error",error:error})
    }
}

export const UsersProfileService = async ()=>{
    try{
        let users = await UserModel.find()
        return ({status:"Success", users:users})
    }catch(error){
        return ({status:"error",error:error})
    }
}
//
// export const UsersProfileUpdateService = async ()=>{
//     try{
//         let data = await BrandModel.find()
//         return ({status:"Success", data:data})
//     }catch(error){
//         return ({status:"error",error:error})
//     }
// }
//
// export const UserProfileDeleteService = async ()=>{
//     try{
//         let data = await BrandModel.find()
//         return ({status:"Success", data:data})
//     }catch(error){
//         return ({status:"error",error:error})
//     }
// }

