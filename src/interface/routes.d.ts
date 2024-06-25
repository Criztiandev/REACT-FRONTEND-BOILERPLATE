import { ReactNode } from "react";

export interface NavigationValue {
  label: string;
  icon?: ReactNode | null;
  path: string;
}
