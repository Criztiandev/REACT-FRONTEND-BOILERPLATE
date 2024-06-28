/* eslint-disable @typescript-eslint/no-explicit-any */
import XStack from "@/components/container/XStack";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC } from "react";
import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  ResponsiveContainer,
  LabelList,
  Tooltip,
  Legend,
} from "recharts";

interface Props<T> {
  label?: string;
  overallData?: number;
  key: keyof T;
  payload: T[];
}

const PieChart = <T,>({ key, payload, label, overallData }: Props<T>) => {
  return (
    <ResponsiveContainer width="70%" height="100%">
      <PieChartComponent width={200} height={200}>
        <Pie
          data={payload}
          innerRadius="75%"
          outerRadius={"100%"}
          fill="#8884d8"
          paddingAngle={2}
          dataKey={key as string}
        >
          {label && (
            <LabelList
              position="center"
              content={() => (
                <>
                  <text
                    x="50%"
                    y="45%"
                    fill="#cccccc"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xl capitalize"
                  >
                    {label}
                  </text>
                  <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-5xl font-bold capitalize"
                  >
                    {overallData}
                  </text>
                </>
              )}
            />
          )}
          {payload.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              fill={(item as any)?.color || "black"}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.5")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            />
          ))}
        </Pie>

        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChartComponent>
    </ResponsiveContainer>
  );
};

export default PieChart;

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}
const CustomTooltip: FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Card
        className="p-4"
        style={{
          background: payload[0].payload?.fill,
          color: "white",
        }}
      >
        {payload.map((item) => (
          <XStack className="items-center gap-2">
            <div className="font-semibold">{item.name}</div>
            <div className={cn("font-semibold")}>{item.value}</div>
          </XStack>
        ))}
      </Card>
    );
  }

  return null;
};
