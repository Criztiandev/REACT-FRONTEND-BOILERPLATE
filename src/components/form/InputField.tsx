import { Input } from "../ui/input";
import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const InputField: FC<Props> = ({ label, description, ...props }) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={props?.name || "name"}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...props} {...field} className={cn("", props.className)} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
