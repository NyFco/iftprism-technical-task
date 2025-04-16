"use client";

import { useUserStore } from "@/store/userStore";

const UserDashboard = () => {
  const { user } = useUserStore();

  return (
    <div className="text-white flex items-center justify-center">
      <div className="w-full max-w-[800px] p-2">
        {user && (
          <>
            <h2>Username: {user.username}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Role: {user.role}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
