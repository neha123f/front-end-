import axios from 'axios';



export const fetchUsers=()=>axios.get('http://localhost:8000/employees');
export const createUsers=(formData)=>axios.post('http://localhost:8000/employees/add',formData);
export const deleteUsers=(id)=>axios.get(`http://localhost:8000/employees/delete/${id}`);
export const updateUsers=(formData)=>axios.post('http://localhost:8000/employees/update',formData);

export const loginUsers=(formData)=>axios.post('http://localhost:8000/employees/login',formData)
export const userRecords=(formData)=>axios.post('http://localhost:8000/employees/userdata',formData)