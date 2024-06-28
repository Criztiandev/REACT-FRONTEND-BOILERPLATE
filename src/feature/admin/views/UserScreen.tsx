import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileDown, Plus } from "lucide-react";

import DataTable from "@/components/table/DataTable";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

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

type Person = {
  id: string | number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    id: 0,
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    id: 1,
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    id: 2,
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<Person, any>[] = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("age", {
    header: "Age",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("visits", {
    header: "Visits",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("progress", {
    header: "Progress",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
];

const UserScreen = () => {
  return (
    <YStack className="gap-4">
      <div className="flex items-center justify-between">
        <YStack className="gap-2">
          <h3 className="text-3xl font-bold">
            All Users <Badge className="font-bol px-4 text-lg">100 users</Badge>
          </h3>
          <p>Manage employees (Server side table functionalities.)</p>
        </YStack>

        <XStack className="gap-4">
          <Input placeholder="Search for users" className="w-[300px]" />

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

          <Button className="flex gap-2">
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

      <DataTable<Person> data={defaultData} columns={columns} capacity={10} />
    </YStack>
  );
};

export default UserScreen;
