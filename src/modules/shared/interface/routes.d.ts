import { ReactNode } from "react";

export interface BaseRouteValue {
  label: string;
  icon?: ReactNode | null;
  path?: string;
}

export interface SidebarRouteValue extends BaseRouteValue {
  routes?: BaseRouteValue[];
}
