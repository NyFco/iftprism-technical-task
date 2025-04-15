"use client";

import { useUserStore } from "@/store/userStore";

const UserDashboard = () => {
  const { user } = useUserStore();

  return (
    <div>
      {user && (
        <>
          <h2>Welcome, {user.name}</h2>
          <h2>Role: {user.role}</h2>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
