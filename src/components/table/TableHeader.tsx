/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  TableHead,
  TableHeader as TableHeaderComponent,
  TableRow,
} from "@/components/ui/table";

import { flexRender, Table } from "@tanstack/react-table";

interface Props<T> {
  table: Table<T>;
}

const TableHeader = <T,>({ table }: Props<T>) => {
  return (
    <TableHeaderComponent>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <>
                <TableHead
                  key={header.id}
                  className="cursor-pointer rounded-[5px] hover:bg-background/90"
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
    </TableHeaderComponent>
  );
};

export default TableHeader;
