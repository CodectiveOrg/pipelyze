type Row = {
  id: string;
  firstName: string;
  age: number;
};

type Column<T> = {
  [K in keyof T]: {
    field: K;
    render: (value: T[K], row: T) => unknown;
  };
}[keyof T];

const rows: Column<Row>[] = [
  {
    field: "firstName",
    render: (value) => value, // value should be string
  },
  {
    field: "age",
    render: (value) => value, // value should be number
  },
  {
    field: "fullName",
    render: (value) => value, // value should be undefined
  },
];

console.log(rows);
