import { SidebarRouteValue } from "@/modules/shared/interface/routes";
import { PieChart, Users2 } from "lucide-react";

const SidebarRoutes: SidebarRouteValue[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: <PieChart />,
  },

  {
    label: "Users",
    path: "/users",
    icon: <Users2 />,
  },
];

export default SidebarRoutes;
