/* eslint-disable @typescript-eslint/no-explicit-any */
import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";
import WidgetCard from "../components/card/WidgetCard";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/form/SelectField";
import { FormProvider, useForm } from "react-hook-form";

import PaymentOverviewLinetChart from "../container/chart/PaymentOverviewLinetChart";
import GenderPieChart from "../container/chart/GenderPieChart";
import LeadOverviewTable from "../container/table/LeadOverviewTable";

const DasboardScreen = () => {
  const overallForm = useForm({
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
      <LeadOverviewTable />
    </YStack>
  );
};

export default DasboardScreen;
