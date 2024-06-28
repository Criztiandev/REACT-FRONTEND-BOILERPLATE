/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "jotai";
import { PaginationState } from "@tanstack/react-table";

// Define an atom to hold the table instance
export const tableInstanceAtom = atom<any>(null);

export const tableGlobalFilterAtom = atom("");

export const tablePaginationAtom = atom<PaginationState>({
  pageIndex: 0,
  pageSize: 10,
});
