import { ReactElement } from "react";

import type { GetDataDto } from "../types/get-data-dto";
import TableHeaderComponent from "./components/table.header.component";
import TableRowComponent from "./components/table.row.component";

import styles from "./table.module.css";

export default function TableComponent(items: GetDataDto[]): ReactElement {
  return (
    <table className={styles.table}>
      <TableHeaderComponent />
      <tbody>
        <TableRowComponent items={items} />
      </tbody>
    </table>
  );
}
