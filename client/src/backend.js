import axios from 'axios';
const Base = 'http://localhost:1434';
export const Axios = axios.create({
    baseURL: Base,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
export const Server = Base+'/api/v1';
export const ServerImg = Base+'/img/';