import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.error || "Something went wrong!";
    toast.error(message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
