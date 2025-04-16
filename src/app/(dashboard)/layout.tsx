"use client";

import { useMe } from "@/api/user/hooks";
import Loading from "@/components/Loading";
import { ReactNode } from "react";
import Header from "./_components/Header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { isFetching } = useMe();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-700">
        {isFetching ? (
          <div className="flex items-center justify-center pt-10">
            <Loading />
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;
