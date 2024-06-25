import YStack from "@/components/container/YStack";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props extends PropsWithChildren {
  title?: string;
  open: boolean;
  className?: string;
  onOpenChange: () => void;
}

const NotificationSheet: FC<Props> = ({ title, children, ...props }) => {
  return (
    <Sheet {...props}>
      <SheetContent className="border p-0">
        <SheetHeader className="cursor-default bg-gray-50 px-4 py-2 hover:bg-gray-100">
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>

        <YStack className="h-full">
          <ScrollArea
            className="rounded-md border"
            style={{
              height: "calc(100vh - 97px)",
            }}
          >
            {children}
          </ScrollArea>

          <Link
            to="/"
            className={buttonVariants({
              variant: "ghost",
              className: "bottom-0 w-full",
            })}
          >
            View All
          </Link>
        </YStack>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationSheet;
