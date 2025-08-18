"use client";

import { ReactNode } from "react";

import FileExplorerComponent from "@/components/file-explorer/file-explorer.component";
import { type FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  const handleFetch = async (
    page: number,
    pageSize: number,
  ): Promise<FileExplorerItemType[]> => {
    const res = await fetch(
      `http://localhost:3000/api/dataset?page=${page}&pageSize=${pageSize}`,
    );
    const data = await res.json();
    const dataset: FileExplorerItemType[] = await data.result.datasets;

    return dataset;
  };

  return (
    <div className={styles.page}>
      <FileExplorerComponent items={[]} onFetch={handleFetch} />
    </div>
  );
}
