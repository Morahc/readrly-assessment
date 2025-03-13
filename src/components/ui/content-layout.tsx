import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type ContentLayoutProps = PropsWithChildren & {
  className?: string;
};

export default function ContentLayout({ children, className }: ContentLayoutProps) {
  return <section className={cn("p-6 lg:py-20 lg:px-[112px] relative", className)}>{children}</section>;
}
