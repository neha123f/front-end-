import mongoose from "mongoose";

const BookSchema=new mongoose.Schema({
    userId:{type:String,default:0},
    id:{type:String,unique:true,sparse:true},
    type:{type:String,default:0},
    fromDate:{type:String,default:0},
    toDate:{type:String,default:0},
    shift:{type:String,default:0},
    food:{type:String,default:0},
    floor:{type:String,default:0},
    seat:{type:String,default:0},
    status:{type:String,default:0},
    checkInTime:{type:String,default:0}
    
    // allProperties:[{type:mongoose.Schema.Types.ObjectId,ref:'Property'}]
});

const bookModel=mongoose.model('Book',BookSchema);

export default bookModel;