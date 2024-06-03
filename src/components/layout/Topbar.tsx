import React from "react";
import XStack from "../container/XStack";
import { Button } from "../ui/button";
import { Bell, Menu, Moon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Topbar = () => {
  return (
    <XStack className="relative bg-white z-10 w-full justify-between items-center p-4 border border-b">
      <XStack className="gap-4 items-center">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>

        <div className="text-[24px] font-bold">DEBESMSCAT</div>
      </XStack>

      <XStack className="gap-4">
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <Moon />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={16}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </XStack>
    </XStack>
  );
};

export default Topbar;
