"use client";

import { useAllUsers } from "@/api/user/hooks";
import UserItem from "./_components/UserItem";

const AdminDashboard = () => {
  const { data: allUsers } = useAllUsers();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-2">
      <h1 className="text-2xl font-bold">Users List</h1>
      <div className="max-w-[1000px] w-full">
        {allUsers &&
          allUsers?.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default AdminDashboard;
