/* eslint-disable @typescript-eslint/no-explicit-any */
import Topbar from "./Topbar";
import Wrapper from "../container/Wrapper";
import { ScrollArea } from "../ui/scroll-area";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

interface Props extends HTMLAttributes<HTMLDivElement> {
  routes: any[];
}

const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <main className="h-screen overflow-hidden">
      <Topbar />
      <Wrapper>
        <Sidebar />
        <div
          {...props}
          className={cn(
            "w-full h-full border ml-[17.2rem] p-4",
            props.className
          )}>
          <ScrollArea>{children}</ScrollArea>
        </div>
      </Wrapper>
    </main>
  );
};

export default Layout;
