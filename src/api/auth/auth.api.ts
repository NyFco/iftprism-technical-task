import axiosInstance from "@/lib/axios";
import { LoginRequest, LoginResponse, LogoutResponse } from "@/types";

export const loginApi = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  return await axiosInstance
    .post<LoginResponse>("/auth/login", credentials)
    .then((response) => response.data);
};

export const logoutApi = async (): Promise<LogoutResponse> => {
  return await axiosInstance
    .post<LogoutResponse>("/auth/logout")
    .then((response) => response.data);
};
