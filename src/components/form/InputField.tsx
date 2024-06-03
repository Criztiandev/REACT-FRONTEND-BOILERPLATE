import YStack from "../container/YStack";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField: FC<Props> = ({ label, ...props }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <YStack>
      {label && <Label className="mb-2">{label}</Label>}
      <Input
        {...register(props.name || "N/A")}
        {...props}
        className={cn(
          `${
            errors[`${props.name}`] &&
            "border-[1.5px] border-red-600 focus:border-red-600"
          }`,
          props.className,
        )}
      />

      {errors[`${props.name}`] && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops!</span>{" "}
          {errors[`${props.name}`]?.message as string}
        </p>
      )}
    </YStack>
  );
};

export default InputField;
