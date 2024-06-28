import { useEffect, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import XStack from "../container/XStack";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { tableGlobalFilterAtom } from "@/service/state/table.atom";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  capacity?: number;
}

const DataTable = <T,>({ data, columns, capacity }: DataTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useAtom(tableGlobalFilterAtom);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

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
      setPagination((prev) => ({ ...prev, pageIndex: capacity }));
    }
  }, [capacity]);

  return (
    <>
      <div className="min-h-[300px] w-full border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <>
                      <TableHead
                        key={header.id}
                        className="cursor-pointer hover:bg-background/90"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    </>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <XStack className="items-center justify-between p-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table?.getFilteredSelectedRowModel().rows.length} of{" "}
          {table?.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <XStack className="gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table?.previousPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table?.nextPage()}
            disabled={!table?.getCanNextPage()}
          >
            Next
          </Button>
        </XStack>
      </XStack>
    </>
  );
};

export default DataTable;
