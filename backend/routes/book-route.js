import express from 'express';
import { createBooking, getAllBookings, getBooking, updateBooking, updateCheckInTime } from '../controllers/book-controller.js';

const router=express.Router();

router.route('/').get(getAllBookings);
router.route('/add').post(createBooking);
router.route('/update').post(updateBooking);
router.route('/updatetime').post(updateCheckInTime);
router.route('/get/:id').get(getBooking);



export default router;