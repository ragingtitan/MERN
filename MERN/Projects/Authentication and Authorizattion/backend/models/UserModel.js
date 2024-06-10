import mongoose from "mongoose";

const UserScheme=new mongoose.Schema({
    username: {type: 'string',required: true, unique: true},
    email:{type: 'string',required: true, unique: true},
    password:{type: 'string',required: true},
    
});

const UserModel=mongoose.model("User",UserScheme);
export default UserModel;