import { cn } from "@/lib/utils";
import { useAtomValue } from "jotai";
import { sidebarPanelAtom } from "@/service/state/general.atom";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavigationRouteValue } from "@/interface/routes";
import { FC } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  routes: NavigationRouteValue[];
}

const Sidebar: FC<Props> = ({ routes }) => {
  const state = useAtomValue(sidebarPanelAtom);

  return (
    <aside className="fixed left-0 top-0 h-screen">
      <TooltipProvider>
        <nav
          className={cn(`mt-[64px] ${state ? "w-[275px]" : "w-[75px]"} p-4`)}
        >
          <ul className="flex flex-col gap-4">
            {routes?.map((route) => (
              <SidebarBlob state={state} key={route.label} {...route} />
            ))}
          </ul>
        </nav>
      </TooltipProvider>
    </aside>
  );
};

export default Sidebar;

interface BlobProps extends NavigationRouteValue {
  state: boolean;
}

const SidebarBlob: FC<BlobProps> = ({ state, ...props }) => {
  return (
    <li key={props.label}>
      <Link to={props.path || "/"} className="flex">
        <Tooltip>
          <TooltipTrigger
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: cn(
                `${state && "w-full justify-start gap-4"} opacity-50 hover:opacity-100`,
              ),
            })}
          >
            <div className="mx-4 flex w-full items-center justify-start gap-2">
              {props.icon}
              {state && <span className="text-lg">{props.label}</span>}
            </div>
          </TooltipTrigger>

          {!state && (
            <TooltipContent side="right">
              <p>{props.label}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </Link>
    </li>
  );
};
