import axios from 'axios';

export const api= axios.create({
    'baseURL':'http://localhost:3003'
})

api.interceptors.response.use((config : any) => {
    if(!config?.url?.includes('/auth')){
        const token = localStorage.getItem("jwt_token")
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
},error  => {
    return Promise.reject(error);
    }
)