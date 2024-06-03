import { Button } from "../ui/button";
import { Inbox, PieChart } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="absolute top-0  border border-r h-screen">
      <nav className="mt-[80px] w-[275px] p-4">
        <ul className="flex flex-col gap-4">
          <li>
            <Button className="justify-start gap-4 w-full">
              <PieChart />
              <span>Dashboard</span>
            </Button>
          </li>

          <li>
            <Button variant="ghost" className="justify-start gap-4 w-full">
              <Inbox />
              <span>Inbox</span>
            </Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
