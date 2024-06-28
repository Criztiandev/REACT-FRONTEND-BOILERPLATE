/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TableBody as TableBodyComponent,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { ColumnDef, flexRender, Table } from "@tanstack/react-table";

interface Props<T> {
  table: Table<T>;
  columns: ColumnDef<T, any>[];
}

const TableBody = <T,>({ table, columns }: Props<T>) => {
  return (
    <TableBodyComponent>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBodyComponent>
  );
};

export default TableBody;
