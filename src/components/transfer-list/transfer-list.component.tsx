"use client";

import { ReactNode, useEffect, useState } from "react";

import ListComponent from "@/components/transfer-list/components/list/list.component";
import TransferButtonGroupComponent from "@/components/transfer-list/components/transfer-button-group/transfer-button-group.component";

import styles from "./transfer-list.module.css";

export type Item = {
  title: string;
  position: "left" | "right";
  isChecked: boolean;
};

type Props = {
  leftTitles: string[];
  rightTitles: string[];
};

export default function TransferListComponent({
  leftTitles,
  rightTitles,
}: Props): ReactNode {
  const [items, setItems] = useState<readonly Item[]>([]);

  useEffect(() => {
    const leftItems: Item[] = leftTitles.map((title) => ({
      title,
      position: "left",
      isChecked: false,
    }));

    const rightItems: Item[] = rightTitles.map((title) => ({
      title,
      position: "right",
      isChecked: false,
    }));

    setItems([...leftItems, ...rightItems]);
  }, [leftTitles, rightTitles]);

  const handleToggle = (index: number): void => {
    setItems((old) =>
      old.with(index, { ...old[index], isChecked: !old[index].isChecked }),
    );
  };

  const handleMoveAllItems = (position: "left" | "right"): void => {
    setItems((old) => old.map((item) => ({ ...item, position: position })));
  };

  const handleMoveCheckedItems = (position: "left" | "right"): void => {
    setItems((old) =>
      old.map((item) => {
        if (item.position === position || !item.isChecked) {
          return item;
        }

        return { ...item, position: position, isChecked: false };
      }),
    );
  };

  return (
    <div className={styles["transfer-list"]}>
      <ListComponent position="left" items={items} onToggle={handleToggle} />
      <TransferButtonGroupComponent
        items={items}
        onMoveAllItems={handleMoveAllItems}
        onMoveCheckedItems={handleMoveCheckedItems}
      />
      <ListComponent position="right" items={items} onToggle={handleToggle} />
    </div>
  );
}
