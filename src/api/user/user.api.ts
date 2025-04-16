import axiosInstance from "@/lib/axios";
import { MeResponse, UsersResponse } from "@/types";

export const getMeApi = async (): Promise<MeResponse> => {
  return await axiosInstance
    .get<MeResponse>("/auth/me")
    .then((response) => response.data);
};

export const getAllUsersApi = async (): Promise<UsersResponse> => {
  return await axiosInstance
    .get<UsersResponse>("/admin/users")
    .then((response) => response.data);
};
