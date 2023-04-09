import mongoose from "mongoose";

const SeatSchema=new mongoose.Schema({
    floor:{type:String,unique:true,sparse:true},
    seats:{type:String},
    bookedSeats:{type:[Number],default:[]},
    // allProperties:[{type:mongoose.Schema.Types.ObjectId,ref:'Property'}]
});

const seatModel=mongoose.model('Seat',SeatSchema);

export default seatModel;