import type { ReactNode } from "react";

import clsx from "clsx";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

import styles from "./header.module.css";

const titles = ["Name", "Size", "Type", "Modified", "Shared"];

export default function HeaderComponent(): ReactNode {
  return (
    <div className={styles.header}>
      {titles.map((title, index) => {
        if (index == 0)
          return (
            <div
              key={index}
              className={clsx(styles["first-cell"], styles.cell)}
            >
              <CheckboxComponent />
              {title}
            </div>
          );
        else
          return (
            <div key={index} className={styles.cell}>
              {title}
            </div>
          );
      })}
    </div>
  );
}
