import axios from 'axios';



export const fetchUsers=()=>axios.get('http://localhost:8000/employees');
export const createUsers=(formData)=>axios.post('http://localhost:8000/employees/add',formData);
export const deleteUsers=(id)=>axios.get(`http://localhost:8000/employees/delete/${id}`);
export const updateUsers=(formData)=>axios.post('http://localhost:8000/employees/update',formData);

export const updateUserBooking=(formData)=>axios.post('http://localhost:8000/employees/userbookupdate',formData)

export const loginUsers=(formData)=>axios.post('http://localhost:8000/employees/login',formData)
export const userRecords=(formData)=>axios.post('http://localhost:8000/employees/userdata',formData)

export const fetchSeats=()=>axios.get('http://localhost:8000/seats')
export const createSeats=(formData)=>axios.post('http://localhost:8000/seats/add',formData)
export const fetchSeat=(floor)=>axios.get(`http://localhost:8000/seats/seat/${floor}`);
export const updateSeatAvailability=(data)=>axios.post('http://localhost:8000/seats/updateseat',data);


export const createBookings=(formData)=>axios.post('http://localhost:8000/bookings/add',formData) 