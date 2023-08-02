import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className=" flex items-center justify-center h-full">
      <Link href={"/dashboard"}>
        <Button variant={"secondary"}>Go to Admin Pannel</Button>
      </Link>
    </div>
  );
}
