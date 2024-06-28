import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";
import { Card, CardHeader } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const WidgetCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col gap-4">
        <XStack className="items-center justify-between opacity-70">
          <span className="text-[20px] font-medium">Total Revenue</span>
          <DollarSign />
        </XStack>

        <YStack>
          <h4 className="text-4xl font-bold">$4039.92</h4>
          <span className="text-gray-500">+20.1% from last month</span>
        </YStack>
      </CardHeader>
    </Card>
  );
};

export default WidgetCard;
