import YStack from "@/components/container/YStack";
import DatePicker from "@/components/form/DatePicker";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";

const PerosnalInfoForm = () => {
  return (
    <YStack className="gap-4">
      <InputField
        label="First Name"
        name="firstName"
        placeholder="Enter your first name"
      />
      <InputField
        label="Last Name"
        name="lastName"
        placeholder="Enter your last name"
      />

      <div className="grid grid-cols-2 gap-4">
        <SelectField
          label="Gender"
          name="gender"
          placeholder={"Select Gender"}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "Female" },
          ]}
        />

        <DatePicker label="Birth date" name="birthDate" />
      </div>
    </YStack>
  );
};

export default PerosnalInfoForm;
