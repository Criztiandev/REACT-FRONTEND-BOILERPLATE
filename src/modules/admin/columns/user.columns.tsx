/* eslint-disable react-hooks/rules-of-hooks */
import { createColumnHelper, ColumnDef } from "@tanstack/react-table";
import { Link, useLocation, useNavigate } from "react-router-dom";
import XStack from "@/components/container/XStack";
import { Button, buttonVariants } from "@/components/ui/button";
import { Edit2, EyeIcon, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { UserSchemaValue } from "@/modules/shared/interface/role";

const columnHelper = createColumnHelper<UserSchemaValue>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserColumns: ColumnDef<UserSchemaValue, any>[] = [
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
  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("age", {
    header: "Age",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("visits", {
    header: "Visits",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("progress", {
    header: "Progress",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
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
          <Link
            to={`/users/profile/${cell.row.id}`}
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "flex gap-2",
            })}
          >
            <EyeIcon width={18} height={18} />
          </Link>
          <Button
            className="flex gap-2"
            variant="outline"
            size="icon"
            onClick={handleDeleteToggle}
          >
            <Edit2 width={18} height={18} />
          </Button>
          <Button
            className="flex gap-2"
            variant="outline"
            size="icon"
            onClick={handleDeleteToggle}
          >
            <Trash2 width={18} height={18} />
          </Button>
        </XStack>
      );
    },
  }),
];

export default UserColumns;
