/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import XStack from "@/components/container/XStack";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { DashboardReportOveriewValue } from "../interface/dashboard";

const columnHelper = createColumnHelper<DashboardReportOveriewValue>();

const ReportOverviewColumn: ColumnDef<DashboardReportOveriewValue, any>[] = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),

  columnHelper.accessor("name", {
    header: "Full Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("project", {
    header: "Project",
  }),
  columnHelper.accessor("duration", {
    header: "Duration",
    cell: (info) => <Badge>{info.getValue()} days</Badge>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <Badge>{info.getValue()}</Badge>,
  }),

  columnHelper.display({
    id: "action",
    header: "Action",
    cell: ({ cell }) => {
      const navigate = useNavigate();
      const location = useLocation();

      const handleDeleteToggle = () => {
        const currentLocation = location.pathname;
        navigate(`${currentLocation}?selected=true&id=${cell.row.id}`);
      };
      return (
        <XStack className="gap-2">
          <Button className="flex gap-2" onClick={handleDeleteToggle}>
            <Trash2 width={18} height={18} />
            <span className="text-18px]">Delete</span>
          </Button>
        </XStack>
      );
    },
  }),
];

export default ReportOverviewColumn;
