import { ReactNode } from "react";

import FileManagerComponent from "@/components/file-manager/file-manager.component++";

import styles from "./test.module.css";

export default function Page(): ReactNode {
  return (
    <div className={styles["test"]}>
      <FileManagerComponent />
    </div>
  );
}
