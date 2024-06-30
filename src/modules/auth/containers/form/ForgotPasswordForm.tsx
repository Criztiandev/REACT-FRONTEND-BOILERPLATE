import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/components/form/InputField";
import XStack from "@/components/container/XStack";
import { Button } from "@/components/ui/button";
import YStack from "@/components/container/YStack";
import { useNavigate } from "react-router-dom";
import { EmailValidation } from "../../validation/other.validation";

type FormValue = z.infer<typeof EmailValidation>;

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: { email: "" },
    resolver: zodResolver(EmailValidation),
  });

  const onSubmit = (value: FormValue) => {
    console.log(value);

    navigate("/recover/initiate/123123123", { replace: true });
  };

  return (
    <div className="w-full rounded-lg border bg-white p-6 pt-8 shadow sm:max-w-md">
      <div className="mb-4">
        <h1 className="mb-4 text-center text-xl font-bold">
          Find your account
        </h1>
        <p>Please enter your email to search for your account.</p>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <YStack className="gap-2">
            <InputField name="email" placeholder="Email" className="" />

            <XStack className="justify-end">
              <Button>Search</Button>
            </XStack>
          </YStack>
        </form>
      </FormProvider>
    </div>
  );
};

export default ForgotPasswordForm;
