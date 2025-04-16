import { useUserStore } from "@/store/userStore";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { loginApi, logoutApi } from "./auth.api";

export const useLogin = () => {
  const { setUser } = useUserStore();
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
  const router = useRouter();
  const { setUser } = useUserStore();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: (response) => {
      router.replace("/login");
      const successMessage =
        response?.message || "You have logged out successfully";
      toast.success(successMessage);
      setUser(null);
      deleteCookie("token");
    },
  });
};
