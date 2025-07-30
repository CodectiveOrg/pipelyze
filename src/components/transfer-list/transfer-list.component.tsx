"use client";

import { ReactNode, useState } from "react";

import clsx from "clsx";

import { getDifference } from "@/utils/difference.utils";
import { getIntersection } from "@/utils/intersection.utils";

import ButtonComponent from "../button/button.component";
import IconComponent from "../icon/icon.component";
import ListComponent from "./components/list/list.component";

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

  const handleAllRight = (): void => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = (): void => {
    setRight(right.concat(leftChecked));
    setLeft(getDifference<string>(left, leftChecked));
    setCheckedItems(getDifference<string>(checkedItems, leftChecked));
  };

  const handleCheckedLeft = (): void => {
    setLeft(left.concat(rightChecked));
    setRight(getDifference<string>(right, rightChecked));
    setCheckedItems(getDifference<string>(checkedItems, rightChecked));
  };

  const handleAllLeft = (): void => {
    setLeft(left.concat(right));
    setRight([]);
  };

  return (
    <div className={styles["transfer-list"]}>
      <div className={clsx(styles.left, !left.length && styles.empty)}>
        <ListComponent
          items={left}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      </div>
      <div className={styles.middle}>
        {[
          {
            iconName: "arrows-right-line",
            clickHandler: handleAllRight,
            disabled: left.length === 0,
          },
          {
            iconName: "right-line",
            clickHandler: handleCheckedRight,
            disabled: leftChecked.length === 0,
          },
          {
            iconName: "left-line",
            clickHandler: handleCheckedLeft,
            disabled: rightChecked.length === 0,
          },
          {
            iconName: "arrows-left-line",
            clickHandler: handleAllLeft,
            disabled: right.length === 0,
          },
        ].map((item, index) => (
          <ButtonComponent
            color="inherit"
            variant="outlined"
            key={index}
            onClick={item.clickHandler}
            disabled={item.disabled}
          >
            <IconComponent name={item.iconName} />
          </ButtonComponent>
        ))}
      </div>
      <div className={clsx(styles.right, !right.length && styles.empty)}>
        <ListComponent
          items={right}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}
