"use client";

import { useAllUsers } from "@/api/user/hooks";

const AdminDashboard = () => {
  const { data: allUsers } = useAllUsers();

  return (
    <div>
      {allUsers &&
        allUsers?.map((user) => (
          <div key={user.id} className="mb-10">
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Role: {user.role}</p>
          </div>
        ))}
    </div>
  );
};

export default AdminDashboard;
