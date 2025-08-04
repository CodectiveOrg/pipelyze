import type { ReactNode } from "react";

import { GetFileExplorerDto } from "@/components/file-explorer/dto/get-file-explorer-dto";

import HeaderComponent from "./components/header/header.component";
import RowComponent from "./components/row/row.component";

import styles from "./file-explorer.module.css";

type Props = {
  items: GetFileExplorerDto[];
};

export default function FileExplorerComponent({ items }: Props): ReactNode {
  return (
    <div className={styles["file-explorer"]}>
      <HeaderComponent />

      {items.map((item) => (
        <RowComponent key={item.id} item={item} />
      ))}
    </div>
  );
}
