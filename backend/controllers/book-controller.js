import bookModel from "../mongodb/models/book.js";

const getAllBookings=async(req,res)=>{

}

const createBooking=async(req,res)=>{
    // console.log(req.body)
    try {
        const book=new bookModel({
            userId:req.body.id,
            id:req.body.booknId,
            type:req.body.type,
            fromDate:req.body.from,
            toDate:req.body.to,
            shift:req.body.shift,
            food:req.body.food,
            floor:req.body.floor,
            seat:req.body.seat,
            status:req.body.status
        })
        const bookData=await book.save();
        res.status(200).send({success:true,message:'Employee Created',data:bookData});
    } catch (error) {
        res.status(400).send({success:false,message:error.message});
    }
}

export {
    getAllBookings,createBooking,
}