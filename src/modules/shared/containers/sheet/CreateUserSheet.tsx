import { Dispatch, FC } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SetStateAction } from "jotai";
import { ScrollArea } from "@/components/ui/scroll-area";
import Wrapper from "@/components/container/Wrapper";
import { z } from "zod";

import UserValidationSchema from "@/service/validation/user.validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/form/InputField";
import YStack from "@/components/container/YStack";
import { Button } from "@/components/ui/button";

interface Props {
  state: boolean;
  onState: Dispatch<SetStateAction<boolean>>;
}

type UserSchema = z.infer<typeof UserValidationSchema>;

const UserProfileFormSheet: FC<Props> = ({ state, onState }) => {
  const form = useForm<UserSchema>({
    resolver: zodResolver(UserValidationSchema),
  });

  const onSubmit = (value: UserSchema) => {
    console.log(value);
  };
  return (
    <Sheet open={state} onOpenChange={onState}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Add user</SheetTitle>
          <ScrollArea>
            <Wrapper>
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <YStack className="gap-4 px-1">
                    <InputField
                      label="First name"
                      name="firstName"
                      placeholder="Enter your first name"
                    />

                    <InputField
                      label="Last name"
                      name="lastName"
                      placeholder="Enter your last name"
                    />

                    <InputField
                      type="tel"
                      label="Contact"
                      name="phoneNumber"
                      placeholder="Enter your Phone Number"
                    />

                    <InputField
                      type="date"
                      label="Birth Date"
                      name="dateOfBirth"
                      placeholder="Enter your Birth Date"
                    />

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

                    <Button>Submit</Button>
                  </YStack>
                </form>
              </FormProvider>
            </Wrapper>
          </ScrollArea>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default UserProfileFormSheet;
