import { ReactNode } from "react";

type CommonColumnProps = {
  type?: "string" | "number";
  title?: string;
  width?: number;
};

// Generic column type that infers field and value types
export type DataGridColumnType<TRow, TField extends string> = TField extends keyof TRow
  ? {
      field: TField;
      valueGetter?: (value: TRow[TField], row: TRow, index: number) => ReactNode;
    } & CommonColumnProps
  : {
      field: TField;
      valueGetter?: (value: undefined, row: TRow, index: number) => ReactNode;
    } & CommonColumnProps;
