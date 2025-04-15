import axiosInstance from "@/lib/axios";
import { MeResponse } from "@/types";

export const getMeApi = async (): Promise<MeResponse> => {
  return await axiosInstance
    .get<MeResponse>("/auth/me")
    .then((response) => response.data);
};
