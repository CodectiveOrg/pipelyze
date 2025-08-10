import { ReactNode } from "react";

export type DataGridColumnType = {
  field: string;
  type: "string" | "number";
  title?: string;
  width?: number;
  valueGetter?: DataGridColumnValueGetterType;
};

export type DataGridColumnValueGetterType = (
  value: unknown,
  row: unknown,
  index: number,
) => ReactNode;
