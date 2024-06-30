/* eslint-disable @typescript-eslint/no-explicit-any */
import Topbar from "./Topbar";
import Wrapper from "../components/container/Wrapper";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import { NavigationRouteValue } from "@/interface/routes";

import { useAtomValue } from "jotai";
import { sidebarPanelAtom } from "@/service/state/general.atom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  profileRoutes: NavigationRouteValue[];
  sidebarRoute: NavigationRouteValue[];
}

const Layout: FC<Props> = ({
  children,
  profileRoutes = [],
  sidebarRoute = [],
  ...props
}) => {
  const isSidebarToggle = useAtomValue(sidebarPanelAtom);
  // ml-[17.2rem]
  return (
    <>
      <div className="">
        <Topbar routes={profileRoutes} />
        <Wrapper>
          <Sidebar routes={sidebarRoute} />
          <div
            {...props}
            className={cn(
              `border ${isSidebarToggle ? "ml-[17.2rem]" : "ml-[5rem] p-4"}`,
              props.className,
            )}
          >
            <main className="mt-[64px] p-4">{children}</main>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Layout;
