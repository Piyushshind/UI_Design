import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL_PROD;
// console.log(API_BASE_URL);


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,  // 192.168.43.208  // "https://192.168.43.208/Liveliness/api/v2/patrons/"
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("authToken");
        if (token) {
            config.headers["Authorization"] = `${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
