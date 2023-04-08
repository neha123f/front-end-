import mongoose from "mongoose";

const connectDb=(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url,{ useNewUrlParser: true })
    .then(()=>console.log("MongoDb connected"))
    .catch((error)=>console.log(error));
}

export default connectDb;