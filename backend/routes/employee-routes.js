import express from 'express';
import { getAllUsers,createUser,getUserInfoByID,updateUser,deleteUser } from '../controllers/employee-controller.js';

const router=express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);
router.route('/:id').patch(updateUser);
router.route('/:id').get(deleteUser);

export default router;