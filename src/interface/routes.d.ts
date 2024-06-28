import { ReactNode } from "react";

export interface NavigationRouteValue {
  label: string;
  icon?: ReactNode | null;
  path?: string;
}

export interface SidebarRouteValue extends NavigationRouteValue {
  routes?: NavigationRouteValue[];
}
