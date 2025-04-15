import { useUserStore } from "@/store/userStore";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { loginApi, logoutApi } from "./auth.api";

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setUser(response.user);
      const successMessage =
        response?.message || "You have logged in successfully";
      toast.success(successMessage);
    },
  });
};

export const useLogout = () => {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setUser(null);
      const successMessage =
        response?.message || "You have logged out successfully";
      toast.success(successMessage);
    },
  });
};
