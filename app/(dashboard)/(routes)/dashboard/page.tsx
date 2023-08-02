"use client";

import MobileSideBar from "@/components/MobileSideBar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const tools = [
  {
    label: "Location Generation",
    icon: MessageSquare,
    href: "/loaction",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Settings",
    icon: Music,
    href: "/settings",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "New Agencies",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/agency",
  },
  {
    label: "Video Editing",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "User Management",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/user-management",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className=" mb-8 space-y-4">
        <MobileSideBar />
        <h2 className=" text-2xl md:text-4xl font-bold text-center">
          Admin Dashboard
        </h2>
        <p className=" text-muted-foreground font-light text-sm md:text-base text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
          suscipit voluptas? Dolore, obcaecati, officia voluptatem tempore saepe
          laudantium blanditiis nulla veritatis et quisquam minima numquam,
          error deserunt facilis sunt facere!
        </p>
      </div>

      <div className=" px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8 ", tool.color)} />
              </div>
              <div className=" font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-6 h-6" />
          </Card>
        ))}
      </div>
    </div>
  );
}
