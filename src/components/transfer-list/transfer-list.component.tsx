"use client";

import { ReactNode, useEffect, useState } from "react";

import ButtonGroupComponent from "@/components/transfer-list/components/button-group/button-group.component";
import ListComponent from "@/components/transfer-list/components/list/list.component";

import styles from "./transfer-list.module.css";

export type Item = {
  title: string;
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
  const [leftItems, setLeftItems] = useState<readonly Item[]>([]);
  const [rightItems, setRightItems] = useState<readonly Item[]>([]);

  useEffect(() => {
    setLeftItems(leftTitles.map((title) => ({ title, isChecked: false })));
  }, [leftTitles]);

  useEffect(() => {
    setRightItems(rightTitles.map((title) => ({ title, isChecked: false })));
  }, [rightTitles]);

  const handleLeftToggle = (index: number): void => {
    setLeftItems((old) =>
      old.with(index, { ...old[index], isChecked: !old[index].isChecked }),
    );
  };

  const handleRightToggle = (index: number): void => {
    setRightItems((old) =>
      old.with(index, { ...old[index], isChecked: !old[index].isChecked }),
    );
  };

  const handleMoveAllItemsToTheRight = (): void => {
    setRightItems(
      rightItems.concat(
        leftItems.map((item) => ({ ...item, isChecked: false })),
      ),
    );

    setLeftItems([]);
  };

  const handleMoveCheckedItemsToTheRight = (): void => {
    setRightItems(
      rightItems.concat(
        leftItems
          .filter((item) => item.isChecked)
          .map((item) => ({ ...item, isChecked: false })),
      ),
    );

    setLeftItems(leftItems.filter((item) => !item.isChecked));
  };

  const handleMoveCheckedItemsToTheLeft = (): void => {
    setLeftItems(
      leftItems.concat(
        rightItems
          .filter((item) => item.isChecked)
          .map((item) => ({ ...item, isChecked: false })),
      ),
    );

    setRightItems(rightItems.filter((item) => !item.isChecked));
  };

  const handleMoveAllItemsToTheLeft = (): void => {
    setLeftItems(
      leftItems.concat(
        rightItems.map((item) => ({ ...item, isChecked: false })),
      ),
    );

    setRightItems([]);
  };

  return (
    <div className={styles["transfer-list"]}>
      <ListComponent items={leftItems} onToggle={handleLeftToggle} />
      <ButtonGroupComponent
        left={leftItems}
        right={rightItems}
        onMoveAllItemsToTheRight={handleMoveAllItemsToTheRight}
        onMoveCheckedItemsToTheRight={handleMoveCheckedItemsToTheRight}
        onMoveCheckedItemsToTheLeft={handleMoveCheckedItemsToTheLeft}
        onMoveAllItemsToTheLeft={handleMoveAllItemsToTheLeft}
      />
      <ListComponent items={rightItems} onToggle={handleRightToggle} />
    </div>
  );
}
