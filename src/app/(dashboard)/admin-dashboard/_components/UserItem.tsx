"use client";

import { SafeUser } from "@/types";

interface UserItemProps {
  user: SafeUser;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 w-full">
      <h3 className="text-lg font-semibold">{user.id}</h3>
      <h3 className="text-lg font-semibold">{user.username}</h3>
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <h3 className="text-lg font-semibold">{user.role}</h3>
    </div>
  );
};

export default UserItem;
