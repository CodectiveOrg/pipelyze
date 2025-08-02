import type { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

import styles from "./head.module.css";

const titles = ["Name", "Size", "Type", "Modified", "Shared"];

export default function HeadComponent(): ReactNode {
  return (
    <div className={styles.head}>
      {titles.map((title, index) => {
        if (index === 0)
          return (
            <div key={index} className={styles["first-cell"]}>
              <CheckboxComponent />
              {title}
            </div>
          );
        else return <div key={index}>{title}</div>;
      })}
    </div>
  );
}
