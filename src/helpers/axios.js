import axios from 'axios'
import { api } from '../urlConfig'
import store from '../store/index'
import { authConstant } from '../constant/constant';
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});
axiosInstance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if(auth.token){
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
})

axiosInstance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if(status && status === 500){
        localStorage.clear();
        store.dispatch({ type: authConstant.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
})

export default axiosInstance