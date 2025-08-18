"use client";

import { type ReactNode, useEffect, useState } from "react";

import FileExplorerHeaderComponent from "@/components/file-explorer/components/file-explorer-header/file-explorer-header.component";
import FileExplorerRowComponent from "@/components/file-explorer/components/file-explorer-row/file-explorer-row.component";
import { type FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";

import PaginationComponent from "../pagination/pagination.component";

import styles from "./file-explorer.module.css";

type FetchDatasetResponse = {
  dataset: FileExplorerItemType[];
  totalPages: number;
};

type Props = {
  items: FileExplorerItemType[];
  onFetch: (page: number, pageSize: number) => Promise<FetchDatasetResponse>;
};

export default function FileExplorerComponent({
  items,
  onFetch,
}: Props): ReactNode {
  const [page, setPage] = useState<number>(2);
  const [pageSize, setPageSize] = useState<number>(2);
  const [totalPages, setTotalPages] = useState<number>(5);

  useEffect(() => {
    const fetchDataset = async (): Promise<void> => {
      const { totalPages } = await onFetch(page, pageSize);

      setTotalPages(totalPages);
    };

    fetchDataset();
  }, [page, pageSize]);

  return (
    <div className={styles["file-explorer"]}>
      <div className={styles.table}>
        <FileExplorerHeaderComponent />
        {items.map((item) => (
          <FileExplorerRowComponent key={item.id} item={item} />
        ))}
      </div>
      <PaginationComponent
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        changePage={(page) => setPage(page)}
        changePageSize={(size) => setPageSize(size)}
      />
    </div>
  );
}
