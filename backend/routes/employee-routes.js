import express from 'express';
import { getAllUsers,createUser,getUserInfoByID,updateUser,deleteUser, loginUser, userData, updateUserBook, } from '../controllers/employee-controller.js';

const router=express.Router();

router.route('/').get(getAllUsers);
router.route('/add').post(createUser);
router.route('/:id').get(getUserInfoByID);
router.route('/update').post(updateUser);
router.route('/delete/:id').get(deleteUser);

router.route('/userbookupdate').post(updateUserBook);

router.route('/login').post(loginUser);
router.route('/userdata').post(userData);

export default router;