import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    // allProperties:[{type:mongoose.Schema.Types.ObjectId,ref:'Property'}]
});

const adminModel=mongoose.model('Admin',AdminSchema);

export default adminModel;