"use client";

import { ReactNode, useState } from "react";

import clsx from "clsx";

import { getDifference } from "@/utils/difference.utils";
import { getIntersection } from "@/utils/intersection.utils";

import ButtonComponent from "../button/button.component";
import CheckboxComponent from "../checkbox/checkbox.component";
import IconComponent from "../icon/icon.component";

import styles from "./transfer-list.module.css";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function TransferListComponent(): ReactNode {
  const [checked, setChecked] = useState<readonly string[]>([]);
  const [left, setLeft] = useState<readonly string[]>(items);
  const [right, setRight] = useState<readonly string[]>([]);

  const leftChecked = getIntersection<string>(checked, left);
  const rightChecked = getIntersection<string>(checked, right);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(getDifference<string>(left, leftChecked));
    setChecked(getDifference<string>(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(getDifference<string>(right, rightChecked));
    setChecked(getDifference<string>(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  return (
    <div className={styles["transfer-list"]}>
      <div className={clsx(styles.left, !left.length && styles.empty)}>
        {left.length ? (
          <ul>
            {left.map((item, index) => (
              <li key={index} onClick={handleToggle(item)}>
                <CheckboxComponent
                  checked={checked.includes(item)}
                  onChange={handleToggle(item)}
                />
                <div>{item}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No items</div>
        )}
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
        {right.length ? (
          <ul>
            {right.map((item, index) => (
              <li key={index} onClick={handleToggle(item)}>
                <CheckboxComponent
                  checked={checked.includes(item)}
                  onChange={handleToggle(item)}
                />
                <div>{item}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No items</div>
        )}
      </div>
    </div>
  );
}
