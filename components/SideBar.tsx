"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Code,
  Crown,
  ImageIcon,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Split } from "@geoffcox/react-splitter";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

//routes
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Locations",
    icon: MapPin,
    href: "/locations",
    color: "text-violet-500",
  },
  {
    label: "Agencies",
    icon: Crown,
    color: "text-pink-700",
    href: "/agency",
  },

  {
    label: "Settings",
    icon: Settings,
    color: "text-pink-700",
    href: "/settings",
  },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slat-100 text-white">
      <div className=" px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className=" relative w-8 h-8 mr-4">
            <Image fill src={"/logo.png"} alt={"logo"}></Image>
          </div>
          <h1
            className={cn("text-2xl text-black font-bold", poppins.className)}
          >
            LOGO
          </h1>
        </Link>

        {/* routes are rendered here */}

        <div className=" space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                " text-sm text-black/70  group flex p-3 w-full justify-start font-medium rounded-md hover:bg-slate-200 hover:text-black/70",
                pathname === route.href ? "bg-slate-200 text-black/70 " : ""
              )}
            >
              <div className=" flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
