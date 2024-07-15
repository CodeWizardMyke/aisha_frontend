import axios from 'axios';
const token = localStorage.getItem('token');

const aishaFetch = axios.create({
  baseURL: 'https://backend-aisha.fly.dev/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token.replace(/"/g, '')}`,
  },
})

export default aishaFetch;