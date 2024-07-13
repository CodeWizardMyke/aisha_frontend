import axios from 'axios';
const token = localStorage.getItem('token');

const aishaPost = axios.create({
   baseURL: 'https://backend-aisha.fly.dev/api',
 // baseURL:'http://localhost:1515/api',
  headers: {
    'Authorization': `Bearer ${token.replace(/"/g, '')}`,
  },
})

export default aishaPost;