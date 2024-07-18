import axios from 'axios';
const token = localStorage.getItem('token');

const aishaFetch = axios.create({
 // baseURL: 'https://backend-aisha.fly.dev/api',
  baseURL:'http://localhost:1515/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token ? token.replace(/"/g, '') : ''}`,
  },
})

export default aishaFetch;