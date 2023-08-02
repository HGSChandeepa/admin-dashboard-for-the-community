import SideBar from "@/components/SideBar";
import { Split } from "@geoffcox/react-splitter";
import React from "react";
// import dynamic from "next/dynamic";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="  h-full relative">
      {/* side pannel for the dashboard */}

      <div className=" hidden h-full md:flex lg:flex md:w-[238px] md:flex-col md:fixed md:inset-y-0 z-50 bg-slate-100">
        <div>
          <SideBar />
        </div>
      </div>
      <div>
        <main className="md:pl-60 ">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
