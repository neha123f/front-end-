import employeeModel from '../mongodb/models/employee.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET="bdfhvhwgyfgwejfokfclmdksncjhegwdwejfkfckldmjkcbEHWFGUIEHIOFJLNV";

const getAllUsers=async(req,res)=>{
    try{
        const allUsers=await employeeModel.find();
        res.status(200).json(allUsers);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};
const createUser=async(req,res)=>{
    try{
        let encryptedPassword=await bcrypt.hash(req.body.password,10);
        const user=new employeeModel({
            id:req.body.id,
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            role:req.body.role,
            password:encryptedPassword,
        })
        const userData=await user.save();

        res.status(200).send({success:true,message:'Employee Created',data:userData});

    }catch(error){
        res.status(400).send({success:false,message:error.message});
    }
};
const getUserInfoByID=async(req,res)=>{};

const updateUser=async(req,res)=>{
    // console.log(req.body);
    try{
        let urlId=req.body.urlId;
        let id=req.body.id; 
        let name=req.body.name;
        let email=req.body.email;
        let phone=req.body.phone;
        let role=req.body.role;
        let encryptedPassword=await bcrypt.hash(req.body.password,10);
         const updateData=await employeeModel.findByIdAndUpdate({_id:urlId},{$set:{
            id:id,
            name:name,
            email:email,
            phone:phone,
            role:role,
            password:encryptedPassword
        }})
        res.status(200).send({success:true,message:'Employee Updated',data:updateData});

    }catch(error){
        res.status(400).send({success:false,message:error.message});
    }

};

const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        await employeeModel.deleteOne({_id:id});
        res.status(200).send({success:true,message:'Employee deleted successfully'});
    }catch(error){
        res.status(400).send({success:false,message:error.message});
    }
};

const loginUser=async(req,res)=>{
    // console.log(req.body)
    try{
        const {username,password}=req.body;
        const user=await employeeModel.findOne({id:username});
        // console.log(user)
        if(!user){
            return res.send({error:"User not found"})
        }
        if(await bcrypt.compare(password,user.password)){
            const token=jwt.sign({id:user.id},JWT_SECRET);
            if(res.status(201)){
                return res.send({status:"ok",data:token})
            }else{
                return res.send({error:"error"})
            }
        }
        res.send({status:"error",error:"Invalid Credentials"})
    }catch(error){
        res.status(400).send({success:false,message:error.message});
    }
}

const userData=async(req,res)=>{
   const {token}=req.body;
//    console.log(req.body);
   try{
    const user=jwt.verify(token,JWT_SECRET);
    // console.log(user);
    const id=user.id;
    employeeModel.findOne({id:id}).then((data)=>{
        res.send({status:"ok",data:data});
    }).catch((error)=>{
        res.send({status:"error",data:error})
    })
   }catch(error){
    res.status(400).send({success:false,message:error.message});
   } 
}

export {
    getAllUsers,createUser,getUserInfoByID,updateUser,deleteUser, loginUser, userData
}