"use client";

import { useLogout } from "@/api/auth/hooks";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";

const Header = () => {
  const { user } = useUserStore();

  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="w-full flex items-center justify-center bg-gray-800">
      <div className="max-w-[800px] w-full flex items-center justify-between p-2  text-white">
        <h1>
          Welcome Back, <span className="font-bold">{user?.name}</span>
        </h1>
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
