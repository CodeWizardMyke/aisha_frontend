import axios from 'axios';

const aishaFetch = axios.create({
  baseURL: 'https://backend-aisha.fly.dev/api',
  headers: {
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
    'Content-Type': 'application/json',
  },
})

export default aishaFetch;