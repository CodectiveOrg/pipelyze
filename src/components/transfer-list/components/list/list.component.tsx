import { ReactNode } from "react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

import styles from "./list.module.css";

type Props = {
  items: readonly string[];
  checkedItems: readonly string[];
  onToggle: (value: string) => void;
};

export default function ListComponent({
  items,
  checkedItems,
  onToggle,
}: Props): ReactNode {
  if (!items.length) {
    return <div className={styles.message}>No items</div>;
  }

  return (
    <ul className={styles.list}>
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
  );
}
