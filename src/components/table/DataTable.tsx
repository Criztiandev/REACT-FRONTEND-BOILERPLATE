import { useEffect, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table } from "@/components/ui/table";

import { useAtom } from "jotai";
import {
  tableGlobalFilterAtom,
  tablePaginationAtom,
} from "@/service/state/table.atom";
import { cn } from "@/lib/utils";
import YStack from "../container/YStack";

import { ScrollArea } from "../ui/scroll-area";
import DataTablePagination from "./DataTablePagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import Wrapper from "../container/Wrapper";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  capacity?: number;
  className?: string;
  height?: string;
}

const DataTable = <T,>({
  data,
  columns,
  capacity,
  className,
  height = "270px",
}: DataTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useAtom(tableGlobalFilterAtom);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [pagination, setPagination] =
    useAtom<PaginationState>(tablePaginationAtom);

  const table = useReactTable<T>({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },

    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),

    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),

    debugTable: true,
  });

  useEffect(() => {
    if (capacity) {
      setPagination({
        pageIndex: 0,
        pageSize: capacity,
      });
    }
  }, [capacity, setPagination]);

  return (
    <YStack className="gap-4">
      <ScrollArea>
        <Wrapper
          className={cn("w-full rounded-[5px] border", className)}
          style={{ height: `calc(100vh - ${height})` }}
        >
          <Table>
            <TableHeader<T> table={table} />
            <TableBody<T> table={table} columns={columns} />
          </Table>
        </Wrapper>
      </ScrollArea>

      <DataTablePagination<T> table={table} />
    </YStack>
  );
};

export default DataTable;
