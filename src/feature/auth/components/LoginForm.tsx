import InputField from "@/components/form/InputField";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import YStack from "@/components/container/YStack";
import XStack from "@/components/container/XStack";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password to short").max(15, "Password too long"),
});

type FormValues = z.infer<typeof formSchema>;

interface Props {
  onSuccess?: () => void;
}

const LoginForm: FC<Props> = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });
  const { handleSubmit } = form;

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <YStack className="gap-4">
          {/* //Email Input */}
          <InputField
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
          />

          {/* Password */}
          <InputField
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
          />

          <XStack className="justify-between text-sm text-gray-500">
            <XStack className="gap-2">
              <input type="checkbox" />
              <Label>Remeber me</Label>
            </XStack>

            <Link
              to={"/forgot-password"}
              className="font-semibold text-blue-600 hover:underline hover:underline-offset-4"
            >
              Forgot Password ?
            </Link>
          </XStack>

          <Button type="submit">Login</Button>
        </YStack>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
