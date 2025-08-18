"use client";

import { type ReactNode } from "react";

import clsx from "clsx";

import IconComponent from "../icon/icon.component";

import styles from "./pagination.module.css";

type Props = {
  page: number;
  pageSize: number;
  totalPages: number;
  changePage: (page: number) => void;
  changePageSize: (size: number) => void;
};

export default function PaginationComponent({
  page,
  pageSize,
  totalPages,
  changePage,
}: Props): ReactNode {
  return (
    <div className={styles.pagination}>
      <div className={styles["rows-per-page"]}>
        <div>Rows per page:</div>
        <div className={styles.menu}>
          <div>{pageSize}</div>
        </div>
      </div>
      <div className={styles.interval}>
        {(page - 1) * pageSize + 1}-{page * pageSize} of {pageSize * totalPages}
      </div>
      <div className={styles.actions}>
        <div className={styles.action} onClick={() => changePage(page - 1)}>
          <IconComponent name="left-fill" />
        </div>
        <div
          className={clsx(styles.action)}
          onClick={() => changePage(page + 1)}
        >
          <IconComponent name="right-fill" color="inherit" />
        </div>
      </div>
    </div>
  );
}
