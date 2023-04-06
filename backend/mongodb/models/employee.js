import mongoose from "mongoose";

const EmployeeSchema=new mongoose.Schema({
    id:{type:String,unique: true},
    name:{type:String},
    email:{type:String},
    role:{type:String},
    password:{type:String},
    booking:{
        id:{type:Number},
        type:{type:String},
        fromDate:{type:String},
        toDate:{type:String},
        shift:{type:String},
        floor:{type:String},
        seat:{type:String},
    },
    // allProperties:[{type:mongoose.Schema.Types.ObjectId,ref:'Property'}]
});

const employeeModel=mongoose.model('Employee',EmployeeSchema);

export default employeeModel;