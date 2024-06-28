import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, FileDown, Plus, Trash2 } from "lucide-react";

import DataTable from "@/components/table/DataTable";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

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
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-2">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>List</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="my-4">
        <YStack className="mb-4">
          <h3 className="text-2xl font-bold">All Users</h3>
          <span>Manage users</span>
        </YStack>

        <div className="flex items-center justify-between py-2">
          <XStack className="gap-2">
            <Input placeholder="Search for users" className="w-[275px]" />
            <XStack>
              <Button
                variant="ghost"
                className="opacity-50 hover:opacity-100"
                size="icon"
              >
                <Eye />
              </Button>

              <Button
                variant="ghost"
                className="opacity-50 hover:opacity-100"
                size="icon"
              >
                <Trash2 />
              </Button>
            </XStack>
          </XStack>

          <XStack className="gap-4">
            <Button className="flex gap-2">
              <Plus />
              Add user
            </Button>
            <Button variant="outline" className="flex gap-2">
              <FileDown />
              Export
            </Button>
          </XStack>
        </div>

        {/* Table */}
        <div>
          <DataTable<Person> data={defaultData} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default UserScreen;
