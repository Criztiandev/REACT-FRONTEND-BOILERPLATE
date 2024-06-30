import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileDown, Plus } from "lucide-react";

import DataTable from "@/components/table/DataTable";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { UserSchemaValue } from "../../interface/model";
import userColumns from "../../config/table/admin/user.columns";
import { useState } from "react";
import UserProfileFormSheet from "../../components/sheet/UserProfileFormSheet";
import { useAtom } from "jotai";
import { tableGlobalFilterAtom } from "@/service/state/table.atom";

const defaultData: UserSchemaValue[] = [
  {
    id: 0,
    firstName: "Tanner",
    lastName: "Linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    id: 1,
    firstName: "Tandy",
    lastName: "Miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    id: 2,
    firstName: "Joe",
    lastName: "Dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    id: 3,
    firstName: "Emma",
    lastName: "Watson",
    age: 32,
    visits: 65,
    status: "Married",
    progress: 75,
  },
  {
    id: 4,
    firstName: "Liam",
    lastName: "Neeson",
    age: 58,
    visits: 30,
    status: "Widowed",
    progress: 60,
  },
  {
    id: 5,
    firstName: "Olivia",
    lastName: "Wilde",
    age: 37,
    visits: 55,
    status: "Divorced",
    progress: 45,
  },
  {
    id: 6,
    firstName: "Chris",
    lastName: "Hemsworth",
    age: 39,
    visits: 70,
    status: "Married",
    progress: 90,
  },
  {
    id: 7,
    firstName: "Scarlett",
    lastName: "Johansson",
    age: 36,
    visits: 80,
    status: "In Relationship",
    progress: 85,
  },
  {
    id: 8,
    firstName: "Tom",
    lastName: "Hanks",
    age: 65,
    visits: 90,
    status: "Married",
    progress: 95,
  },
  {
    id: 9,
    firstName: "Natalie",
    lastName: "Portman",
    age: 41,
    visits: 60,
    status: "Married",
    progress: 70,
  },
  {
    id: 10,
    firstName: "Leonardo",
    lastName: "DiCaprio",
    age: 47,
    visits: 75,
    status: "Single",
    progress: 65,
  },
  {
    id: 11,
    firstName: "Jennifer",
    lastName: "Lawrence",
    age: 31,
    visits: 50,
    status: "Married",
    progress: 55,
  },
  {
    id: 12,
    firstName: "Brad",
    lastName: "Pitt",
    age: 58,
    visits: 85,
    status: "Divorced",
    progress: 40,
  },
  {
    id: 13,
    firstName: "Meryl",
    lastName: "Streep",
    age: 72,
    visits: 95,
    status: "Married",
    progress: 100,
  },
  {
    id: 14,
    firstName: "Robert",
    lastName: "Downey Jr.",
    age: 57,
    visits: 88,
    status: "Married",
    progress: 92,
  },
  {
    id: 15,
    firstName: "Charlize",
    lastName: "Theron",
    age: 46,
    visits: 72,
    status: "Single",
    progress: 78,
  },
  {
    id: 16,
    firstName: "Will",
    lastName: "Smith",
    age: 53,
    visits: 82,
    status: "Married",
    progress: 88,
  },
  {
    id: 17,
    firstName: "Margot",
    lastName: "Robbie",
    age: 32,
    visits: 68,
    status: "Married",
    progress: 72,
  },
  {
    id: 18,
    firstName: "Denzel",
    lastName: "Washington",
    age: 67,
    visits: 78,
    status: "Married",
    progress: 86,
  },
  {
    id: 19,
    firstName: "Julia",
    lastName: "Roberts",
    age: 54,
    visits: 76,
    status: "Married",
    progress: 82,
  },
  {
    id: 20,
    firstName: "Ryan",
    lastName: "Reynolds",
    age: 45,
    visits: 70,
    status: "Married",
    progress: 76,
  },
  {
    id: 21,
    firstName: "Anne",
    lastName: "Hathaway",
    age: 39,
    visits: 62,
    status: "Married",
    progress: 68,
  },
  {
    id: 22,
    firstName: "Johnny",
    lastName: "Depp",
    age: 59,
    visits: 74,
    status: "Divorced",
    progress: 58,
  },
  {
    id: 23,
    firstName: "Sandra",
    lastName: "Bullock",
    age: 57,
    visits: 80,
    status: "Single",
    progress: 84,
  },
  {
    id: 24,
    firstName: "Hugh",
    lastName: "Jackman",
    age: 53,
    visits: 86,
    status: "Married",
    progress: 90,
  },
  {
    id: 25,
    firstName: "Nicole",
    lastName: "Kidman",
    age: 55,
    visits: 84,
    status: "Married",
    progress: 88,
  },
  {
    id: 26,
    firstName: "Matt",
    lastName: "Damon",
    age: 51,
    visits: 78,
    status: "Married",
    progress: 82,
  },
  {
    id: 27,
    firstName: "Angelina",
    lastName: "Jolie",
    age: 47,
    visits: 82,
    status: "Divorced",
    progress: 74,
  },
  {
    id: 28,
    firstName: "Tom",
    lastName: "Cruise",
    age: 60,
    visits: 88,
    status: "Divorced",
    progress: 86,
  },
  {
    id: 29,
    firstName: "Cate",
    lastName: "Blanchett",
    age: 53,
    visits: 76,
    status: "Married",
    progress: 80,
  },
];

const UserScreen = () => {
  const [isToggleUserForm, setIsToggleUserForm] = useState(false);
  const [globalFilter, setGlobalFilter] = useAtom(tableGlobalFilterAtom);
  return (
    <>
      <YStack className="gap-4">
        <div className="flex items-center justify-between">
          <YStack className="gap-2">
            <h3 className="text-3xl font-bold">
              All Users{" "}
              <Badge className="font-bol px-4 text-lg">100 users</Badge>
            </h3>
            <p className="text-gray-500">
              Manage employees (Server side table functionalities.)
            </p>
          </YStack>

          <XStack className="gap-4">
            <Input
              placeholder="Search for users"
              className="w-[300px]"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.currentTarget.value)}
            />

            <Tabs defaultValue="account" className="">
              <TabsList className="">
                <TabsTrigger className="" value="account">
                  Table
                </TabsTrigger>
                <TabsTrigger className="" value="password">
                  Grid
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button
              className="flex gap-2"
              onClick={() => setIsToggleUserForm((prev) => !prev)}
            >
              <Plus />
              Add user
            </Button>

            <Popover>
              <PopoverTrigger>
                <Button variant="outline" className="flex gap-2">
                  View Options
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                sideOffset={8}
                className="flex flex-col gap-4"
              >
                <XStack className="justify-between">
                  <span>Title</span>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="outline" className="flex gap-2">
                        View Options
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </XStack>

                <XStack className="justify-between">
                  <Label>Group By</Label>

                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </XStack>

                <XStack className="justify-between">
                  <Label>Order By</Label>
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </XStack>

                <XStack>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger className="w-full" value="account">
                        Ascending
                      </TabsTrigger>
                      <TabsTrigger className="w-full" value="password">
                        Descending
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </XStack>

                <YStack className="gap-2">
                  <Label className="mb-2">Properties</Label>
                  <XStack className="flex-wrap items-center justify-center gap-2">
                    <Button
                      size="sm"
                      className="h-[28px] rounded-full px-3"
                      variant="outline"
                    >
                      Toggle
                    </Button>

                    <Button
                      size="sm"
                      className="h-[28px] rounded-full px-3"
                      variant="outline"
                    >
                      Toggle
                    </Button>

                    <Button
                      size="sm"
                      className="h-[28px] rounded-full px-3"
                      variant="outline"
                    >
                      Toggle
                    </Button>

                    <Button
                      size="sm"
                      className="h-[28px] rounded-full px-3"
                      variant="outline"
                    >
                      Toggle
                    </Button>
                  </XStack>
                </YStack>

                <YStack>
                  <Separator className="mb-4" />
                  <Button
                    variant="outline"
                    className="flex w-full justify-start gap-2"
                  >
                    <FileDown />
                    <span className="flex w-full items-center justify-center">
                      Export
                    </span>
                  </Button>
                </YStack>
              </PopoverContent>
            </Popover>
          </XStack>
        </div>

        <DataTable<UserSchemaValue>
          data={defaultData}
          columns={userColumns}
          capacity={15}
        />
      </YStack>

      {isToggleUserForm && (
        <UserProfileFormSheet
          state={isToggleUserForm}
          onState={setIsToggleUserForm}
        />
      )}
    </>
  );
};

export default UserScreen;
