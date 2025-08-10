import { DataGridColumnType } from "@/components/data-grid/types/data-grid-column.type";

type Row = {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
};

const row = {
  field: "firstName" as const,
  title: "Full name",
  width: 160,
  valueGetter: (value, row): string => {
    console.log(value);
    return `${row.firstName || ""} ${row.lastName || ""}`;
  },
} satisfies DataGridColumnType<Row, "firstName">;
