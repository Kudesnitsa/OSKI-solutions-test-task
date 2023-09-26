import axios from 'axios';

export default function execute() {
    axios.interceptors.request.use(function(config) {
        const storedUser = localStorage.getItem('user');
        const token = JSON.parse(storedUser ? storedUser : "");

        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}