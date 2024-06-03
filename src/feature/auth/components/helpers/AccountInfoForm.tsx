import YStack from "@/components/container/YStack";
import InputField from "@/components/form/InputField";

const AccountInfoForm = () => {
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
    </YStack>
  );
};

export default AccountInfoForm;
