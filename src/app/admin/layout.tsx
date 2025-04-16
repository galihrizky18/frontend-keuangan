"use client";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="border border-black">SideBar</div>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
