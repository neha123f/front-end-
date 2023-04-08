import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDb from './mongodb/connect.js';
import Userrouter from './routes/employee-routes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:'50mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send({message:'Hello world!'})
// })

app.use("/employees",Userrouter)

const startServer=async()=>{
    try{
        connectDb(process.env.MONGODB_URL);
        app.listen(8000,()=>{
            console.log("Server started on port http://localhost:8000");
        })
    }catch(error){
        console.log(error);
    }
}

startServer();