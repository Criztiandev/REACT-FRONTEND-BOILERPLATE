import { Button } from "../components/ui/button";
import { Inbox, PieChart } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="absolute top-0 h-screen border border-r">
      <nav className="mt-[80px] w-[275px] p-4">
        <ul className="flex flex-col gap-4">
          <li>
            <Button className="w-full justify-start gap-4">
              <PieChart />
              <span>Dashboard</span>
            </Button>
          </li>

          <li>
            <Button variant="ghost" className="w-full justify-start gap-4">
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
