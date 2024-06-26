import { FC } from "react";
import XStack from "../../../components/container/XStack";
import { Button } from "../../../components/ui/button";
import { Bell, Menu, Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useTheme } from "@/provider/ThemeProvider";
import { useSetAtom } from "jotai";
import { notificationPanelAtom } from "@/service/state/account.atom";
import { sidebarPanelAtom } from "@/service/state/general.atom";
import { BaseRouteValue } from "../interface/routes";

interface Props {
  routes: BaseRouteValue[];
}

const Topbar: FC<Props> = ({ routes }) => {
  const { setTheme, theme } = useTheme();
  const setSideBarPanel = useSetAtom(sidebarPanelAtom);
  const setNotificationPanel = useSetAtom(notificationPanelAtom);

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <XStack className="fixed z-10 w-full items-center justify-between border border-b bg-background p-3 pr-5">
      <XStack className="items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="opacity-50 hover:opacity-100"
          onClick={() => setSideBarPanel((prev) => !prev)}
        >
          <Menu />
        </Button>

        <div className="text-[24px] font-bold">Logo</div>
      </XStack>

      <XStack className="gap-4">
        {/* Motification */}
        <Button
          variant="ghost"
          size="icon"
          className="opacity-50 hover:opacity-100"
          onClick={() => setNotificationPanel((prev: boolean) => !prev)}
        >
          <Bell />
        </Button>

        {/* Theme Button */}
        <Button
          variant="ghost"
          size="icon"
          className="opacity-50 hover:opacity-100"
          onClick={handleChangeTheme}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} className="min-w-[190px]">
            <DropdownMenuLabel>
              <div>Bonnie Green</div>
              <div className="truncate font-medium">name@flowbite.com</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {routes?.map(({ label, path, icon }) => (
              <DropdownMenuItem key={label}>
                <Link to={path || ""} className="flex items-center gap-2">
                  {icon}
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log("Logout")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </XStack>
    </XStack>
  );
};

export default Topbar;
