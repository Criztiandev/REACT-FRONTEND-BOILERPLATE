import {
  AreaChart as AreaChartBase,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "../ui/card";
import YStack from "../container/YStack";
import XStack from "../container/XStack";
import { cn } from "@/lib/utils";
import { FC } from "react";

export interface LineConfig<T> {
  key: keyof T;
  color: string;
  isGradient?: boolean;
  gradient?: {
    start: string;
    end: string;
  };
  layer?: number;
}

interface Props<T> {
  payload: T[];
  lines: LineConfig<T>[];
}

const AreaChart = <T,>({ payload, lines }: Props<T>) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChartBase
        width={730}
        height={250}
        data={payload || []}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* Gradient */}
        <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <defs>
          {lines &&
            lines.map(({ key, gradient, isGradient, color }) => (
              <>
                <linearGradient id={key as string} x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={isGradient ? color : gradient?.start}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={isGradient ? color : gradient?.end}
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </>
            ))}
        </defs>
        ;
        {lines &&
          lines.map(({ key, gradient, isGradient, color, layer }, index) => (
            <Area
              type="monotone"
              dataKey={key as string}
              dot={{ r: 8, fill: color, stroke: "white" }}
              stroke={gradient || isGradient ? color : "white"}
              fillOpacity={1}
              strokeWidth={4}
              fill={isGradient || gradient ? `url(#${key as string})` : color}
              stackId={layer ? layer : index + 1}
            />
          ))}
      </AreaChartBase>
    </ResponsiveContainer>
  );
};

export default AreaChart;

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}
const CustomTooltip: FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Card className="p-4">
        <YStack className="gap-2">
          <YStack>
            {payload.map((item) => (
              <XStack className="items-center gap-2">
                <div
                  className="size-4 rounded-full border"
                  style={{ background: item.color }}
                ></div>
                <div
                  className={cn("text-[18px] font-bold")}
                  style={{ color: item.color }}
                >
                  {item.value}
                </div>
              </XStack>
            ))}
          </YStack>
        </YStack>
      </Card>
    );
  }

  return null;
};
