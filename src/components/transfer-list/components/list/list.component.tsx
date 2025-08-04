import { ReactNode } from "react";

import clsx from "clsx";

import CheckboxComponent from "@/components/checkbox/checkbox.component";
import { Item } from "@/components/transfer-list/transfer-list.component";

import styles from "./list.module.css";

type Props = {
  className?: string;
  items: readonly Item[];
  onToggle: (index: number) => void;
};

export default function ListComponent({
  className,
  items,
  onToggle,
}: Props): ReactNode {
  return (
    <div className={clsx(styles.list, className)}>
      {!items.length ? (
        <div className={styles["empty-message"]}>No items</div>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => onToggle(index)}>
              <CheckboxComponent
                checked={item.isChecked}
                onChange={() => onToggle(index)}
              />
              <div className={styles.title}>{item.title}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
