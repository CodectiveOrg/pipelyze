import { ReactNode } from "react";

type CommonColumnProps = {
  type?: "string" | "number";
  title?: string;
  width?: number;
};

// Mapped-union so the `field` determines the type of `value` in valueGetter
export type DataGridColumnType<TRow> =
  | {
      [K in keyof TRow]: {
        field: K;
        valueGetter?: (value: TRow[K], row: TRow, index: number) => ReactNode;
      } & CommonColumnProps;
    }[keyof TRow]
  | ({
      field: Exclude<string, keyof TRow>; // arbitrary, not a key of TRow
      valueGetter?: (value: undefined, row: TRow, index: number) => ReactNode;
    } & CommonColumnProps);
