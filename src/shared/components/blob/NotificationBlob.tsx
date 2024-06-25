import XStack from "@/components/container/XStack";
import YStack from "@/components/container/YStack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FC, ReactNode } from "react";

interface Props {
  imgUrl: string;
  path: string;
  message: string | ReactNode;
  timeStamp: string;
}

const NotificationBlob: FC<Props> = ({ message, timeStamp }) => {
  return (
    <>
      <XStack className="cursor-pointer gap-4 bg-gray-50 p-4 hover:bg-gray-100">
        <Avatar className="size-[48px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <YStack className="gap-2">
          <span className="text-gray-600">{message}</span>
          <span className="text-sm font-medium text-blue-800">{timeStamp}</span>
        </YStack>
      </XStack>

      <Separator />
    </>
  );
};

export default NotificationBlob;
