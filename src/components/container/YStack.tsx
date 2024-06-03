import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const YStack: FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props} className={cn("flex flex-col", props.className)}>
      {children}
    </div>
  );
};

export default YStack;
