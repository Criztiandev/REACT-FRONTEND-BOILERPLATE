import DataTable from "@/components/table/DataTable";
import { Card, CardHeader } from "@/components/ui/card";
import { FormProvider, useForm } from "react-hook-form";
import SelectField from "@/components/form/SelectField";
import XStack from "@/components/container/XStack";
import { ReportOverviewValue } from "../../interface/table";
import ReportOverviewColumn from "./columns/lead.columns";

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
    <Card>
      <CardHeader>
        <XStack className="items-center justify-between">
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
      </CardHeader>
      <DataTable<ReportOverviewValue>
        data={ReportData}
        columns={ReportOverviewColumn}
      />
    </Card>
  );
};

export default LeadOverviewTable;
