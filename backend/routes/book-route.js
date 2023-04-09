import express from 'express';
import { createBooking, getAllBookings } from '../controllers/book-controller.js';

const router=express.Router();

router.route('/').get(getAllBookings);
router.route('/add').post(createBooking);


export default router;