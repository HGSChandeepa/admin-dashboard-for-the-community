"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBar from "./SideBar";

export default function MobileSideBar() {
  // fixing the hydration error
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden lg:hidden "
          >
            <Menu className="" />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"} className="p-0">
          <SideBar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
