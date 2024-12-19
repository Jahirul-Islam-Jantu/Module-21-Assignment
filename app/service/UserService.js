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
        let user = await UserModel.findOne({phoneNumber:reqBody.phoneNumber, password:reqBody.password})
        if (user){
            const token = EncodeToken(user.phoneNumber, user._id)
            return ({status:"Success", user:user, token:token})
        }
        else{
            return { status: "Fail", message: "User not found. Invalid credentials." };
        }
    }catch(error){
        return { status: "Error", message: "Failed login attempt. Please try again." };
    }
}

export const SingleProfileService = async (req)=>{
    try{
        let id = req.headers["_id"]
        let phoneNumber = req.headers["phoneNumber"]
        let ID = req.params.id
        console.log(id, phoneNumber , ID)
        if (id === ID){
            let user = await UserModel.findOne({phoneNumber:phoneNumber})
            if (user){
                return { status: "Success", user };
            }
            else{
                return { status: "Fail", message: "User not found" };
            }
        }
        else {
            return { status: "Fail", message: "Unauthorized access" };
        }
    }catch(error){
        return { status: "Error", error: error.message };
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

export const UsersProfileUpdateService = async (req)=>{
    try{
        let reqBody = req.body
        let phone = req.headers["phoneNumber"]
        let queryID = req.params.id
        if (queryID === req.headers._id) {
            let updatedUser = await UserModel.updateOne({phoneNumber:phone}, reqBody)

            return ({status:"Success", user:updatedUser})
        }else{
            return ({status:"fail to update user"})
        }

    }catch(error){
        return ({status:"error",error:error})
    }
}

export const UserProfileDeleteService = async (req) => {
    try {
        const providedID = req.params.id;
        const id = req.headers["_id"];


        if (id && id === providedID) {
            const deleteResult = await UserModel.deleteOne({ _id: id });
            if (deleteResult.deletedCount > 0) {
                return { status: "Success", message: "User deleted successfully" };
            } else {
                return { status: "Fail", message: "User not found or already deleted" };
            }
        } else {
            return { status: "Fail", message: "Unauthorized or mismatched IDs" };
        }
    } catch (error) {
        return { status: "Error", error: error.message };
    }
};



