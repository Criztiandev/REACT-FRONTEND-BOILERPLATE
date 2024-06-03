import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Wrapper: FC<Props> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Wrapper;
