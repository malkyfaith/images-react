import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5777320515228f525ac8a9e07fbae801d0751b19d8d0eb0fb7df283657c669a2'
    }
}) 