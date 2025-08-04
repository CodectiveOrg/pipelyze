"use client";

import { ReactNode, useState } from "react";

import ButtonGroupComponent from "@/components/transfer-list/components/button-group/button-group.component";
import ListComponent from "@/components/transfer-list/components/list/list.component";
import { useCheckedItems } from "@/components/transfer-list/use-checked-items.hook";

import { getDifference } from "@/utils/difference.utils";

import styles from "./transfer-list.module.css";

type Props = {
  items: string[];
};

export default function TransferListComponent({ items }: Props): ReactNode {
  const [left, setLeft] = useState<readonly string[]>(items || []);
  const [right, setRight] = useState<readonly string[]>([]);

  const [leftChecked, setLeftChecked, handleLeftToggle] = useCheckedItems();
  const [rightChecked, setRightChecked, handleRightToggle] = useCheckedItems();

  const handleMoveAllItemsToTheRight = (): void => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleMoveCheckedItemsToTheRight = (): void => {
    setRight(right.concat(leftChecked));
    setLeft(getDifference<string>(left, leftChecked));
    setLeftChecked([]);
  };

  const handleMoveCheckedItemsToTheLeft = (): void => {
    setLeft(left.concat(rightChecked));
    setRight(getDifference<string>(right, rightChecked));
    setRightChecked([]);
  };

  const handleMoveAllItemsToTheLeft = (): void => {
    setLeft(left.concat(right));
    setRight([]);
  };

  return (
    <div className={styles["transfer-list"]}>
      <ListComponent
        items={left}
        checkedItems={leftChecked}
        onToggle={handleLeftToggle}
      />
      <ButtonGroupComponent
        left={left}
        right={right}
        leftChecked={leftChecked}
        rightChecked={rightChecked}
        onMoveAllItemsToTheRight={handleMoveAllItemsToTheRight}
        onMoveCheckedItemsToTheRight={handleMoveCheckedItemsToTheRight}
        onMoveCheckedItemsToTheLeft={handleMoveCheckedItemsToTheLeft}
        onMoveAllItemsToTheLeft={handleMoveAllItemsToTheLeft}
      />
      <ListComponent
        items={right}
        checkedItems={rightChecked}
        onToggle={handleRightToggle}
      />
    </div>
  );
}
