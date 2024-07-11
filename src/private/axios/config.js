import axios from 'axios';

const aishaFetch = axios.create({
  baseURL: 'https://backend-aisha.fly.dev/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default aishaFetch;