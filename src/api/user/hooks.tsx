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
