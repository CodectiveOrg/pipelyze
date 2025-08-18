"use client";

import { ReactNode, useState } from "react";

import FileExplorerHeaderComponent from "@/components/file-explorer/components/file-explorer-header/file-explorer-header.component";
import FileExplorerRowComponent from "@/components/file-explorer/components/file-explorer-row/file-explorer-row.component";
import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";

import styles from "./file-explorer.module.css";

type Props = {
  items: FileExplorerItemType[];
};

type SortDirection = "ascending" | "descending";
type SortColumn = "title" | "modifiedAt" | null;

export interface SortStateType {
  column: SortColumn;
  direction?: SortDirection;
}

export default function FileExplorerComponent({ items }: Props): ReactNode {
  const [sortedItems, setSortedItems] = useState<FileExplorerItemType[]>(items);
  const [sortState, setSortState] = useState<SortStateType>({ column: null });

  const toggleDirection = (dir: SortDirection): SortDirection => {
    return dir === "ascending" ? "descending" : "ascending";
  };

  function sortTitleHandler(): void {
    setSortState((prev) => {
      let newDirection: SortDirection;

      if (prev.column === "title") {
        newDirection = toggleDirection(prev.direction ?? "ascending");
      } else {
        newDirection = "ascending";
      }

      const newSorted = [...items].sort((a, b) =>
        newDirection === "ascending"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title),
      );
      setSortedItems(newSorted);

      return { column: "title", direction: newDirection };
    });
  }

  function sortDateHandler(): void {
    setSortState((prev) => {
      let newDirection: SortDirection;

      if (prev.column === "modifiedAt") {
        newDirection = toggleDirection(prev.direction ?? "ascending");
      } else {
        newDirection = "ascending";
      }

      const newSorted = [...items].sort((a, b) =>
        newDirection === "ascending"
          ? new Date(a.modifiedAt).getTime() - new Date(b.modifiedAt).getTime()
          : new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime(),
      );
      setSortedItems(newSorted);

      return { column: "modifiedAt", direction: newDirection };
    });
  }

  return (
    <div className={styles["file-explorer"]}>
      <div className={styles.table}>
        <FileExplorerHeaderComponent
          sortState={sortState}
          sortTitleHandler={sortTitleHandler}
          sortDateHandler={sortDateHandler}
        />
        {sortedItems.map((item) => (
          <FileExplorerRowComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
