import { SafeUser } from "@/types";
import { create } from "zustand";

interface UserStore {
  user: SafeUser | null;
  setUser: (user: SafeUser | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: SafeUser | null) => set({ user }),
}));
