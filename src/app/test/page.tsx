import type { ReactNode } from "react";

import DataGridComponent from "@/components/data-grid/data-grid.component";

import {
  DATA_GRID_MOCK_COLUMNS,
  DATA_GRID_MOCK_ROWS,
} from "@/mock/data-grid.mock";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  return (
    <div className={styles.test}>
      <DataGridComponent
        columns={DATA_GRID_MOCK_COLUMNS}
        rows={DATA_GRID_MOCK_ROWS}
      />
    </div>
  );
}
