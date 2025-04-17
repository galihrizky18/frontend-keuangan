"use client";
import SidebarAdmin from "@/components/Admin/SidebarAdmin";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-2 w-screen h-screen">
      {/* SideBar Android */}
      <div className=" w-[15%] border border-black">
        <SidebarAdmin />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
