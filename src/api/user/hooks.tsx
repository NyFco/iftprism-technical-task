import { getAllUsers } from "@/lib/db";
import { useUserStore } from "@/store/userStore";
import { useQuery } from "react-query";
import { getMeApi } from "./user.api";

export const useMe = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useQuery({
    queryKey: ["user"],
    queryFn: getMeApi,
    onSuccess: (data) => {
      if (data.user) {
        setUser(data.user);
      }
    },
  });
};

export const useAllUsers = () => {
  return useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
  });
};
