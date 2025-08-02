import type { ReactNode } from "react";

import BodyComponent from "./components/body/body.component";
import HeadComponent from "./components/head/head.component";

import styles from "./file-manager.module.css";

export default function FileManagerComponent(): ReactNode {
  return (
    <div className={styles["file-manager"]}>
      <HeadComponent />
      <BodyComponent />
    </div>
  );
}
