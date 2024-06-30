import DataTable from "@/components/table/DataTable";
import { Card, CardContent } from "@/components/ui/card";
import { FormProvider, useForm } from "react-hook-form";
import SelectField from "@/components/form/SelectField";
import XStack from "@/components/container/XStack";
import ReportOverviewColumn from "@/config/table/admin/lead.columns";
import { ReportOverviewValue } from "../../interface/container";

//TODO
/**
 * 1. I need to fix this bug
 * 2. I
 */

const ReportData: ReportOverviewValue[] = [
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

const LeadOverviewTable = () => {
  const form = useForm({
    defaultValues: { reportAt: "" },
  });

  return (
    <Card className="flex flex-col gap-4">
      <XStack className="items-center justify-between px-4 pt-4">
        <h2 className="text-[24px] font-bold">Lead Overview</h2>

        <XStack>
          <FormProvider {...form}>
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

      <CardContent className="flex flex-col gap-4 p-2">
        <DataTable<ReportOverviewValue>
          data={ReportData}
          columns={ReportOverviewColumn}
          height="540px"
          capacity={5}
        />
      </CardContent>
    </Card>
  );
};

export default LeadOverviewTable;
