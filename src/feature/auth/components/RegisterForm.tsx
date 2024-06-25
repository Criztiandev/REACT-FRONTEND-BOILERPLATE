import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import YStack from "@/components/container/YStack";
import {
  AccountInfoValue,
  PersonalInfoValue,
  RegisterFomValue,
} from "../auth.validation";
import useMultiForm from "@/hooks/useMultiForm";
import AccountInfoFormStep from "./helpers/steps/AccountInfoStep";
import PersonalInfoStep from "./helpers/steps/PersonalInfoStep";

type FormValues = z.infer<typeof RegisterFomValue>;

interface Props {
  onSuccess?: () => void;
}

const RegisterForm: FC<Props> = () => {
  const {
    step,
    isFirstStep,
    isLastStep,
    currentStepIndex,
    nextStep,
    prevStep,
  } = useMultiForm([<PersonalInfoStep />, <AccountInfoFormStep />]);
  const ValidationList = [PersonalInfoValue, AccountInfoValue];
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "male",
    },
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
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <YStack className="gap-4">
          {step}

          <Button type="submit">{isLastStep ? "Register" : "Next"}</Button>

          {!isFirstStep && (
            <Button variant="outline" onClick={() => prevStep()}>
              Back
            </Button>
          )}
        </YStack>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
