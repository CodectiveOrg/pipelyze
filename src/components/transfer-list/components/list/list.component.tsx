import { ReactNode } from "react";

import clsx from "clsx";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

import styles from "./list.module.css";

type Props = {
  className?: string;
  items: readonly string[];
  checkedItems: readonly string[];
  onToggle: (value: string) => void;
};

export default function ListComponent({
  className,
  items,
  checkedItems,
  onToggle,
}: Props): ReactNode {
  return (
    <div className={clsx(styles.list, className)}>
      {!items.length ? (
        <div className={styles["empty-message"]}>No items</div>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => onToggle(item)}>
              <CheckboxComponent
                checked={checkedItems.includes(item)}
                onChange={() => onToggle(item)}
              />
              <div className={styles.title}>{item}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
