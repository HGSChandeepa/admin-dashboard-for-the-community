import React from "react";
import Image from "next/image";

interface EmmptyProps {
  lable: string;
}
export default function Empty({ lable }: EmmptyProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-20 ">
      <div className=" relative h-72 w-72">
        <Image alt="empty" fill src={"/empty.png"} />
      </div>

      <p className="text-muted-foreground text-sm text-center">{lable}</p>
    </div>
  );
}
