/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "jotai";
import { Table } from "@tanstack/react-table";

// Define an atom to hold the table instance
export const tableInstanceAtom = atom<Table<any> | null>(null);

export const tableGlobalFilterAtom = atom("");
