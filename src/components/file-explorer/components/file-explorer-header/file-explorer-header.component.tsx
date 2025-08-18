import { ReactNode } from "react";

import clsx from "clsx";

import { SortStateType } from "@/components/file-explorer/file-explorer.component";
import IconComponent from "@/components/icon/icon.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./file-explorer-header.module.css";

type Props = {
  sortState: SortStateType;
  sortTitleHandler: () => void;
  sortDateHandler: () => void;
};
export default function FileExplorerHeaderComponent({
  sortState,
  sortTitleHandler,
  sortDateHandler,
}: Props): ReactNode {
  return (
    <div className={clsx(styles["file-explorer-header"], "subtitle2")}>
      <div className={styles.cell} onClick={sortTitleHandler}>
        {sortState.column === "title" && sortState.direction ? (
          <>
            <TypographyComponent variant="subtitle1">Title</TypographyComponent>
            <IconComponent
              name={
                sortState.direction === "ascending"
                  ? "arrow-up-line"
                  : "arrow-down-line"
              }
              color="action"
            />
          </>
        ) : (
          "Title"
        )}
      </div>
      <div className={styles.cell}>Size</div>
      <div className={styles.cell}>Type</div>
      <div className={styles.cell} onClick={sortDateHandler}>
        {sortState.column === "modifiedAt" && sortState.direction ? (
          <>
            <TypographyComponent variant="subtitle1">
              Modified
            </TypographyComponent>
            <IconComponent
              name={
                sortState.direction === "ascending"
                  ? "arrow-up-line"
                  : "arrow-down-line"
              }
              color="action"
            />
          </>
        ) : (
          "Modified"
        )}
      </div>
      <div className={styles.cell}></div>
    </div>
  );
}
