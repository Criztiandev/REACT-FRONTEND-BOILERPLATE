import { BaseRouteValue } from "@/modules/shared/interface/routes";
import { Settings, UserRound } from "lucide-react";

const ProfileRoutes: BaseRouteValue[] = [
  { path: "/", label: "Profile", icon: <UserRound size={18} /> },
  { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
];

export default ProfileRoutes;
