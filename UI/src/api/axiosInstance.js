import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://192.168.43.208/api/v2/patrons/",  // 192.168.43.208
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
