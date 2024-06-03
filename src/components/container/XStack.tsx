import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const XStack: FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props} className={cn("flex flex-row", props.className)}>
      {children}
    </div>
  );
};

export default XStack;
