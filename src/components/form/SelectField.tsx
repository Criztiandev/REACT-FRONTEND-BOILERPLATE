import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC, SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  description?: string;
  placeholder: string;
  options: SelectOptions[];
}

interface SelectOptions {
  label: string;
  value: string;
}

const SelectField: FC<Props> = ({
  label,
  placeholder,
  options,
  description,
  name,
}) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name || "name"}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
