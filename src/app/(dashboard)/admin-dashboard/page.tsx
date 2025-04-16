"use client";

import { useAllUsers } from "@/api/user/hooks";
import Loading from "@/components/Loading";
import UserItem from "./_components/UserItem";

const AdminDashboard = () => {
  const { data: allUsers, isFetching } = useAllUsers();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-2">
      <h1 className="text-2xl font-bold text-white">Users List</h1>
      <div className="max-w-[800px] w-full bg-gray-800 rounded-lg p-4 pt-0 mt-4 text-white">
        {isFetching ? (
          <div className="flex items-center justify-center pt-10">
            <Loading />
          </div>
        ) : (
          allUsers?.map((user) => <UserItem key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
