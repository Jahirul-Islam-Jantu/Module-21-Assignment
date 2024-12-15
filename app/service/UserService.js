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
        let user = await UserModel.find(reqBody)
        if (user){
            const token = EncodeToken(user[0].phoneNumber, user[0]._id)
            return ({status:"Success", user:user, token:token})
        }
        else{
            return ({status: "fail"})
        }
    }catch(error){
        return ({status:"error", message:"Failed login attemp"})
    }
}

export const SingleProfileService = async ()=>{
    try{
        let data = await BrandModel.find()
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}

export const UsersProfileService = async ()=>{
    try{
        let data = await BrandModel.find()
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}

export const UsersProfileUpdateService = async ()=>{
    try{
        let data = await BrandModel.find()
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}

export const UserProfileDeleteService = async ()=>{
    try{
        let data = await BrandModel.find()
        return ({status:"Success", data:data})
    }catch(error){
        return ({status:"error",error:error})
    }
}

