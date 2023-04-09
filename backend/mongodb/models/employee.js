import mongoose from "mongoose";

const EmployeeSchema=new mongoose.Schema({
    id:{type:String, unique:true,sparse:true},
    name:{type:String},
    email:{type:String,unique:true,sparse:true},
    phone:{type:Number},
    role:{type:String},
    password:{type:String},
    booking:{
        id:{type:String,default:0},
        type:{type:String,default:0},
        fromDate:{type:String,default:0},
        toDate:{type:String,default:0},
        shift:{type:String,default:0},
        food:{type:String,default:0},
        floor:{type:String,default:0},
        seat:{type:String,default:0},
        status:{type:String,default:0},
    },
    // allProperties:[{type:mongoose.Schema.Types.ObjectId,ref:'Property'}]
});

const employeeModel=mongoose.model('Employee',EmployeeSchema);

export default employeeModel;