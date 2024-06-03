import { FC } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "../ui/label";
import YStack from "../container/YStack";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
}

const DatePicker: FC<Props> = ({ label, name }) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState }) => {
        const birthDate = watch(name);
        const { errors } = formState;

        return (
          <YStack>
            <Label className="mb-2">{label}</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    " justify-start text-left font-normal",
                    !birthDate && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {birthDate ? (
                    format(birthDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  onDayBlur={field.onBlur}
                  disabled={field.disabled}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {errors[`${name}`] && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span>{" "}
                {errors[`${name}`]?.message as string}
              </p>
            )}
          </YStack>
        );
      }}
    />
  );
};

export default DatePicker;
