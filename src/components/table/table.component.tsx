import { ReactNode } from "react";

import styles from "./table.module.css";

export default function TableComponent({ children }: { children: ReactNode }) {
  return <table className={styles.table}>{children}</table>;
}

function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }: { children: ReactNode }) {
  return <tbody className={styles["table-row"]}>{children}</tbody>;
}

function TableRow({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>;
}

TableComponent.Header = TableHeader;
TableComponent.Body = TableBody;
TableComponent.Row = TableRow;
