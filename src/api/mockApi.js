import axios from "axios";
import {message} from "antd";

const api = axios.create({
    // baseURL: 'https://68c7ac8f5d8d9f51473287bd.mockapi.io/',
    baseURL: 'http://localhost:8080/',
    headers: {'Content-Type': 'application/json'},
    timeout: 10_000,
})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {status, data} = error.response;
        if (status === 404) {
            console.log(error.response)
            message
                .error("请求资源不存在", 10_100)
                .then(() => {});

        }
        return Promise.reject(error);
    }
);

export {api}