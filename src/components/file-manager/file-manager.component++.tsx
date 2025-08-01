import type { ReactNode } from "react";

import BodyComponent from "./components/body.component";
import HeaderComponent from "./components/header.component";

import styles from "./file.module.css";

export default function FileManagerComponent(): ReactNode {
  return (
    <div className={styles["file-manager"]}>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
}
