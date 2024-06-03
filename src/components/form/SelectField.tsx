import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import YStack from "../container/YStack";

import { FC, SelectHTMLAttributes } from "react";
import { Label } from "../ui/label";
import { Controller, useFormContext } from "react-hook-form";

interface SelectOptions {
  label: string;
  value: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder: string;
  options: SelectOptions[];
}

const SelectField: FC<Props> = ({ label, placeholder, options, name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name || "N/A"}
      render={({ field }) => (
        <YStack>
          <Label className="mb-2">{label}</Label>
          <Select
            value={field.value}
            onValueChange={field.onChange}
            disabled={field.disabled}>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options &&
                options.map((option) => (
                  <SelectItem key={option.label} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </YStack>
      )}
    />
  );
};

export default SelectField;
