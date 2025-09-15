import axios from "axios";

export const api = axios.create({
    baseURL: 'https://68c7ac8f5d8d9f51473287bd.mockapi.io/',
    headers: {'Content-Type': 'application/json'},
    timeout: 10_000,
})