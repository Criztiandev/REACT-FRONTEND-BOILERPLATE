import YStack from "@/components/container/YStack";
import CheckboxField from "@/components/form/CheckboxField";
import InputField from "@/components/form/InputField";
import { Link } from "react-router-dom";

const AccountInfoStep = () => {
  return (
    <YStack className="gap-4">
      <InputField
        type="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
      />
      <InputField
        type="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
      />

      <CheckboxField
        name="toc"
        label={
          <span>
            I accept the{" "}
            <Link
              to={"/"}
              className="text-blue-700 hover:underline hover:underline-offset-8"
            >
              Terms and Condition
            </Link>
          </span>
        }
      ></CheckboxField>
    </YStack>
  );
};

export default AccountInfoStep;
