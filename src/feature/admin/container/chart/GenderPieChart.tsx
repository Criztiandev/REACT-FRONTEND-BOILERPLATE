import PieChart from "@/components/chart/PieChart";
import XStack from "@/components/container/XStack";
import SelectField from "@/components/form/SelectField";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormProvider, useForm } from "react-hook-form";

interface DataValue {
  name: string;
  value: number;
  color: string;
}

const data: DataValue[] = [
  { name: "Group A", value: 400, color: "#0088FE" },
  { name: "Group B", value: 300, color: "#FFBB28" },
  { name: "Group C", value: 300, color: "#FF8042" },
  { name: "Group D", value: 200, color: "#00C49F" },
];

const GenderPieChart = () => {
  const form = useForm({
    defaultValues: { reportAt: "" },
  });

  return (
    <Card>
      <CardHeader>
        <XStack className="items-center justify-between">
          <h2 className="text-[28px] font-bold">Gender</h2>

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
      <CardContent className="flex h-[450px] w-full items-center justify-center py-4">
        <PieChart<DataValue> key="value" payload={data} />
      </CardContent>
    </Card>
  );
};

export default GenderPieChart;
