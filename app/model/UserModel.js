import mongoose from 'mongoose'

const dataSchema = mongoose.Schema  ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    NIDNumber: {type: String, required: true},
    phoneNumber:{type:String, required:true, unique:true},
    password: {type: String, required: true},
    bloodGroup: {type: String, required: true},
}, {versionKey: false, timestamps: true});

const UserModel = mongoose.model('users', dataSchema);

export default UserModel;