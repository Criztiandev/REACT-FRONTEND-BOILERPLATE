import { ReactElement, useState } from "react";

const useMultiForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const nextStep = () => {
    setCurrentStepIndex((prev) =>
      prev >= steps.length - 1 ? prev : (prev += 1)
    );
  };

  const prevStep = () => {
    setCurrentStepIndex((prev) => (prev <= 0 ? prev : (prev -= 1)));
  };

  const gotoStep = (index: number) => {
    if (index > steps.length) return;
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    gotoStep,
    nextStep,
    prevStep,
  };
};

export default useMultiForm;
