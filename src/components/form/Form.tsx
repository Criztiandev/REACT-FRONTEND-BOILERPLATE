/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, FormHTMLAttributes } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface Props extends FormHTMLAttributes<HTMLFormElement> {}

const Form: FC<Props> = ({ children, ...props }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form {...props}>{children}</form>
    </FormProvider>
  );
};

export default Form;
