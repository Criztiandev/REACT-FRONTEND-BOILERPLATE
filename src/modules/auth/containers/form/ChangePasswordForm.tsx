import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/components/form/InputField";
import XStack from "@/components/container/XStack";
import { Button } from "@/components/ui/button";
import YStack from "@/components/container/YStack";
import { useNavigate } from "react-router-dom";
import { PasswordValidation } from "../../validation/other.validation";

type FormValue = z.infer<typeof PasswordValidation>;

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(PasswordValidation),
  });

  const onSubmit = (value: FormValue) => {
    console.log(value);

    navigate("/recover/code/123123123", { replace: true });
  };

  return (
    <div className="w-full rounded-lg border bg-white p-6 pt-8 shadow sm:max-w-md">
      <div className="mb-4">
        <h1 className="mb-4 text-center text-xl font-bold">
          Choose a new password
        </h1>
        <p>
          Create a new password that is at least 6 characters long. A strong
          password is combination of letters, numbers, and punctuation marks.
        </p>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <YStack className="gap-2">
            <InputField
              type="password"
              name="password"
              placeholder="Enter Password"
              className=""
            />

            <XStack className="justify-end gap-4">
              <Button variant="outline">Skip</Button>
              <Button>Continue</Button>
            </XStack>
          </YStack>
        </form>
      </FormProvider>
    </div>
  );
};

export default ChangePasswordForm;
