/* eslint-disable @typescript-eslint/no-explicit-any */
import XStack from "@/components/container/XStack";
import SelectField from "@/components/form/SelectField";
import { FormProvider, useForm } from "react-hook-form";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import AreaChart, { LineConfig } from "@/components/chart/AreaChart";

interface DataValue {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataValue[] = [
  {
    name: "Sept",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Oct",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Nov",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const PaymentOverviewLinetChart = () => {
  const form = useForm({
    defaultValues: { reportAt: "" },
  });

  const AreaLineConfig: LineConfig<DataValue>[] = [
    { key: "uv", color: "#3498db", isGradient: true, layer: 1 },
    { key: "pv", color: "#27ae60", isGradient: true, layer: 3 },
    { key: "amt", color: "#8e44ad", isGradient: true, layer: 2 },
  ];
  return (
    <Card>
      <CardHeader>
        <XStack className="items-center justify-between">
          <h2 className="text-[28px] font-bold">Payment Overview</h2>

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
      <CardContent className="h-[450px] w-full py-4">
        <AreaChart<DataValue> payload={data} lines={AreaLineConfig} />
      </CardContent>
    </Card>
  );
};

export default PaymentOverviewLinetChart;
