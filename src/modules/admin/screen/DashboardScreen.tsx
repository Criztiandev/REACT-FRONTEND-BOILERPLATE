/* eslint-disable @typescript-eslint/no-explicit-any */
import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";
import WidgetCard from "../../../components/cards/WidgetCard";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/form/SelectField";
import { FormProvider, useForm } from "react-hook-form";
import PaymentOverviewLinetChart from "../containers/chart/PaymentOverviewLinetChart";
import GenderOverviewPieChart from "../containers/chart/GenderOverviewPieChart";
import LeadOverviewTable from "../containers/table/LeadOverviewTable";
import Wrapper from "@/components/container/Wrapper";

const DashboardScreen = () => {
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

      <Wrapper className="grid grid-cols-4 gap-8">
        <WidgetCard />
        <WidgetCard />
        <WidgetCard />
        <WidgetCard />
      </Wrapper>

      <Wrapper className="grid grid-cols-[65%_auto] gap-8">
        <PaymentOverviewLinetChart />
        <GenderOverviewPieChart />
      </Wrapper>
      <LeadOverviewTable />
    </YStack>
  );
};

export default DashboardScreen;
