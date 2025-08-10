import { ReactNode } from "react";

export type DataGridColumnType<TRow> = {
  [TField in keyof TRow]: {
    field: TField;
    type?: "string" | "number";
    title?: string;
    width?: number;
    valueGetter: (value: TRow[TField], row: TRow, index: number) => ReactNode;
  };
}[keyof TRow];
