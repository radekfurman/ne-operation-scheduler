import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://ne-operation-scheduler-4dc55-default-rtdb.firebaseio.com/'
});

export default instance;
