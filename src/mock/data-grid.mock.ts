import { DataGridColumnType } from "@/components/data-grid/types/data-grid-column.type";
import { DataGridRowType } from "@/components/data-grid/types/data-grid-row.type";

export const DATA_GRID_MOCK_COLUMNS: DataGridColumnType[] = [
  { field: "id", title: "ID", width: 90 },
  {
    field: "firstName",
    title: "First name",
    width: 150,
  },
  {
    field: "lastName",
    title: "Last name",
    width: 150,
  },
  {
    field: "age",
    title: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "fullName",
    title: "Full name",
    width: 160,
    valueGetter: (value, row) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      `${(row as any).firstName || ""} ${(row as any).lastName || ""}`,
  },
];

export const DATA_GRID_MOCK_ROWS: DataGridRowType[] = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "Ali", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
