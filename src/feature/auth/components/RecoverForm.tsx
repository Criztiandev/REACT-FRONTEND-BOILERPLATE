import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/components/form/InputField";
import XStack from "@/components/container/XStack";
import { Button } from "@/components/ui/button";
import YStack from "@/components/container/YStack";
import { useNavigate } from "react-router-dom";
import { CodeInfoValue } from "../auth.validation";

type FormValue = z.infer<typeof CodeInfoValue>;

const RecoverForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      code: "",
    },
    resolver: zodResolver(CodeInfoValue),
  });

  const onSubmit = (value: FormValue) => {
    console.log(value);

    navigate("/recover/password/123123123", { replace: true });
  };

  return (
    <div className="w-full rounded-lg border bg-white p-6 pt-8 shadow sm:max-w-md">
      <div className="mb-4">
        <h1 className="mb-4 text-center text-xl font-bold">
          Enter security code
        </h1>
        <p>
          Please check your email for a message with your code. Your code is 8
          numbers long.
        </p>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <YStack className="gap-2">
            <InputField name="code" placeholder="Enter code" className="" />

            <XStack className="justify-between">
              <Button className="text-sm" variant="ghost">
                Did'nt recieve a code ?
              </Button>

              <Button>Continue</Button>
            </XStack>
          </YStack>
        </form>
      </FormProvider>
    </div>
  );
};

export default RecoverForm;
