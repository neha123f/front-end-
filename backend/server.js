import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongodb/connect.js';
import Userrouter from './routes/employee-routes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/',(req,res)=>{
    res.send({message:'Hello world!'})
})

const startServer=async()=>{
    try{
        connectDb(process.env.MONGODB_URL);
        app.listen(8080,()=>{
            console.log("Server started on port http://localhost:8080");
        })
    }catch(error){
        console.log(error);
    }
}

startServer();