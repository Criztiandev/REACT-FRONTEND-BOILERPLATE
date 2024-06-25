/* eslint-disable @typescript-eslint/no-explicit-any */
import Topbar from "./Topbar";
import Wrapper from "../components/container/Wrapper";
import { ScrollArea } from "../components/ui/scroll-area";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import { NavigationValue } from "@/interface/routes";

import NotificationSheet from "@/shared/container/sheet/NotificationSheet";
import { useAtom } from "jotai";
import { notificationPanelAtom } from "@/service/state/account.atom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  profileRoutes: NavigationValue[];
}

const Layout: FC<Props> = ({ children, profileRoutes = [], ...props }) => {
  const [notificationPanelValue, setNotificationPanelValue] = useAtom(
    notificationPanelAtom,
  );
  return (
    <>
      <main className="h-screen overflow-hidden">
        <Topbar routes={profileRoutes} />
        <Wrapper>
          <Sidebar />
          <div
            {...props}
            className={cn(
              "w-fullborder ml-[17.2rem] h-full p-4",
              props.className,
            )}
          >
            <ScrollArea>{children}</ScrollArea>
          </div>
        </Wrapper>
      </main>

      <NotificationSheet
        title="Notification"
        open={notificationPanelValue}
        onOpenChange={() => setNotificationPanelValue((prev) => !prev)}
      />
    </>
  );
};

export default Layout;
