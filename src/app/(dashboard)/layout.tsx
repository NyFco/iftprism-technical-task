"use client";

import { useMe } from "@/api/user/hooks";
import { useUserStore } from "@/store/userStore";
import { ReactNode, useEffect } from "react";
import Header from "./_components/Header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const userStore = useUserStore();
  const { data: meResponse } = useMe();

  useEffect(() => {
    if (meResponse) {
      userStore.setUser(meResponse.user);
    }
    // Disabled because if add the userStore to the dependencies it will crash for too many rerenders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meResponse]);

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
