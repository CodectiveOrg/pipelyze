"use client";

import { ReactNode, useState } from "react";

import ButtonGroupComponent from "@/components/transfer-list/components/button-group/button-group.component";
import ListComponent from "@/components/transfer-list/components/list/list.component";

import { getDifference } from "@/utils/difference.utils";
import { getIntersection } from "@/utils/intersection.utils";

import styles from "./transfer-list.module.css";

type Props = {
  items: string[];
};

export default function TransferListComponent({ items }: Props): ReactNode {
  const [checkedItems, setCheckedItems] = useState<readonly string[]>([]);
  const [left, setLeft] = useState<readonly string[]>(items || []);
  const [right, setRight] = useState<readonly string[]>([]);

  const leftChecked = getIntersection<string>(checkedItems, left);
  const rightChecked = getIntersection<string>(checkedItems, right);

  const handleToggle = (value: string): void => {
    const currentIndex = checkedItems.indexOf(value);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedItems(newChecked);
  };

  const handleMoveAllItemsToTheRight = (): void => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleMoveCheckedItemsToTheRight = (): void => {
    setRight(right.concat(leftChecked));
    setLeft(getDifference<string>(left, leftChecked));
    setCheckedItems(getDifference<string>(checkedItems, leftChecked));
  };

  const handleMoveCheckedItemsToTheLeft = (): void => {
    setLeft(left.concat(rightChecked));
    setRight(getDifference<string>(right, rightChecked));
    setCheckedItems(getDifference<string>(checkedItems, rightChecked));
  };

  const handleMoveAllItemsToTheLeft = (): void => {
    setLeft(left.concat(right));
    setRight([]);
  };

  return (
    <div className={styles["transfer-list"]}>
      <div className={styles.left}>
        <ListComponent
          items={left}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      </div>
      <div className={styles.middle}>
        <ButtonGroupComponent
          items={{ left, right, leftChecked, rightChecked }}
          actions={{
            handleAllLeft: handleMoveAllItemsToTheLeft,
            handleAllRight: handleMoveAllItemsToTheRight,
            handleCheckedLeft: handleMoveCheckedItemsToTheLeft,
            handleCheckedRight: handleMoveCheckedItemsToTheRight,
          }}
        />
      </div>
      <div className={styles.right}>
        <ListComponent
          items={right}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}
