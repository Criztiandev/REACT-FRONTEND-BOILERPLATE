/* eslint-disable @typescript-eslint/no-explicit-any */
import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";
import WidgetCard from "../components/card/WidgetCard";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/form/SelectField";
import { FormProvider, useForm } from "react-hook-form";

import PaymentOverviewLinetChart from "../container/chart/PaymentOverviewLinetChart";
import GenderPieChart from "../container/chart/GenderPieChart";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import DataTable from "@/components/table/DataTable";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface ReportDataValue {
  id: string | number;
  name: string;
  email: string;
  project: string;
  duration: number;
  status: string;
}

const ReportData: ReportDataValue[] = [
  {
    id: 0,
    name: "Criztian1",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
  {
    id: 1,
    name: "Criztian",
    email: "@criztian",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "Lost Lead",
  },
];

const columnHelper = createColumnHelper<ReportDataValue>();

const ReportColumns: ColumnDef<ReportDataValue, any>[] = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Full Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("project", {
    header: "Project",
  }),
  columnHelper.accessor("duration", {
    header: "Duration",
    cell: (info) => <Badge>{info.getValue()} days</Badge>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <Badge>{info.getValue()}</Badge>,
  }),

  columnHelper.display({
    id: "action",
    header: "Action",
    cell: () => (
      <XStack className="gap-2">
        <Button className="flex gap-2">
          <Edit width={18} height={18} />
          <span className="text-18px]">Edit</span>
        </Button>
        <Button className="flex gap-2">
          <Trash2 width={18} height={18} />
          <span className="text-18px]">Delete</span>
        </Button>
      </XStack>
    ),
  }),
];

const DasboardScreen = () => {
  const overallForm = useForm({
    defaultValues: { reportAt: "" },
  });

  const reportForm = useForm({
    defaultValues: { reportAt: "" },
  });

  return (
    <YStack className="gap-8">
      <XStack className="justify-between">
        <h1 className="text-3xl font-bold">This Week’s Overview</h1>

        <XStack className="gap-4">
          <FormProvider {...overallForm}>
            <SelectField
              placeholder="Current week"
              name="reportAt"
              options={[
                { label: "Last week", value: "last-wekk" },
                { label: "Last Month", value: "last-month" },
              ]}
            />
          </FormProvider>

          <Button>Download</Button>
        </XStack>
      </XStack>

      <div className="grid grid-cols-4 gap-8">
        <WidgetCard />
        <WidgetCard />
        <WidgetCard />
        <WidgetCard />
      </div>

      <div className="grid grid-cols-[65%_auto] gap-8">
        <PaymentOverviewLinetChart />
        <GenderPieChart />
      </div>

      <div>
        <Card>
          <CardHeader>
            <XStack className="items-center justify-between">
              <h2 className="text-[28px] font-bold">Lead</h2>

              <XStack>
                <FormProvider {...reportForm}>
                  <SelectField
                    placeholder="Current week"
                    name="reportAt"
                    options={[
                      { label: "Month", value: "month" },
                      { label: "Year", value: "year" },
                    ]}
                  />
                </FormProvider>
              </XStack>
            </XStack>
          </CardHeader>
          <DataTable<ReportDataValue>
            data={ReportData}
            columns={ReportColumns}
          />
        </Card>
      </div>
    </YStack>
  );
};

export default DasboardScreen;
