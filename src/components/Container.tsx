import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section
      className={cn(
        "max-w-475 sm:max-w-640 md:max-w-768 lg:max-w-1024 xl:max-w-1280 2xl:max-w-1536 mx-auto w-full border-4 border-red-500 px-2",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default Container;
