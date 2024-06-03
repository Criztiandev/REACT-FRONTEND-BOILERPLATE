import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import YStack from "@/components/container/YStack";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  AccountInfoValue,
  PersonalInfoValue,
  RegisterFomValue,
} from "../auth.validation";
import useMultiForm from "@/hooks/useMultiForm";
import AccountInfoForm from "./helpers/AccountInfoForm";
import PerosnalInfoForm from "./helpers/PerosnalInfoForm";

type FormValues = z.infer<typeof RegisterFomValue>;

interface Props {
  defaultValues: Record<string, unknown>;
  onSuccess?: () => void;
}

const RegisterForm: FC<Props> = ({ defaultValues }) => {
  const {
    step,
    isFirstStep,
    isLastStep,
    currentStepIndex,
    nextStep,
    prevStep,
  } = useMultiForm([<PerosnalInfoForm />, <AccountInfoForm />]);
  const ValidationList = [PersonalInfoValue, AccountInfoValue];

  const form = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(ValidationList[currentStepIndex]),
  });
  const { handleSubmit } = form;

  const onSubmit = () => {
    if (!isLastStep) {
      nextStep();
      return;
    }

    const payload = form.getValues();
    console.log(payload);
  };

  return (
    <div className="w-full rounded-lg border bg-white p-6 pt-8 shadow sm:max-w-md">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Sign up your account
      </h1>

      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <YStack className="gap-4">
            {step}

            <Button type="submit">{isLastStep ? "Register" : "Next"}</Button>

            {isFirstStep ? (
              <ThirPartyRegistration />
            ) : (
              <Button variant="outline" onClick={() => prevStep()}>
                Back
              </Button>
            )}

            <Link
              to={"/login"}
              className="text-center text-sm font-medium text-blue-500 hover:underline hover:underline-offset-4"
            >
              Already have an account ?
            </Link>
          </YStack>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;

const ThirPartyRegistration = () => {
  return (
    <>
      <Separator />

      <Button type="button" variant="outline">
        Sign up with Google
      </Button>
      <Button type="button" variant="outline">
        Sign in with Facebook
      </Button>
    </>
  );
};
