import axios from "axios";
import { deleteCookie } from "cookies-next";
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

    const status = error?.response?.status;
    if (status === 401) {
      deleteCookie("token");

      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
