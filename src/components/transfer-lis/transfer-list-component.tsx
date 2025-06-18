"use client";

import { useState } from "react";

import clsx from "clsx";

import { TransferListItemType } from "@/components/transfer-lis/types/transfer-list-item.type";

import { ColorType } from "@/types/color.type";

import CheckboxComponent from "../checkbox/checkbox.component";
import IconButtonComponent from "../icon-button/icon-button.component";

import styles from "./transfer-list.module.css";

interface TransferListProps {
  items1: TransferListItemType[];
  items2: TransferListItemType[];
  color?: ColorType;
}

export default function TransferListComponent({
  items1,
  items2,
  color,
}: TransferListProps) {
  const [list1, setList1] = useState<TransferListItemType[]>(items1);
  const [list2, setList2] = useState<TransferListItemType[]>(items2);

  const [selectedLeft, setSelectedLeft] = useState<TransferListItemType[]>([]);
  const [selectedRight, setSelectedRight] = useState<TransferListItemType[]>(
    [],
  );

  const transferItems = (arrow: string) => {
    if (arrow === "right") {
      setList2((prev) => [
        ...prev,
        ...list1.filter((item) => !prev.some((i) => i.id === item.id)),
      ]);
      setList1([]);
    } else {
      setList1((prev) => [
        ...prev,
        ...list2.filter((item) => !prev.some((i) => i.id === item.id)),
      ]);
      setList2([]);
    }
  };

  const selectedID = (item: TransferListItemType, arrow: string) => {
    if (arrow == "left") {
      setSelectedLeft((prev) => [...prev, item]);
    } else {
      setSelectedRight((prev) => [...prev, item]);
    }
  };

  const transferEachItem = (arrow: string) => {
    if (arrow === "right") {
      setList2((prev) => [
        ...prev,
        ...selectedLeft.filter((item) => !prev.some((i) => i.id === item.id)),
      ]);
      setList1((prev) => prev.filter((item) => !selectedLeft.includes(item)));
      setSelectedLeft([]);
    } else {
      setList1((prev) => [
        ...prev,
        ...selectedRight.filter((item) => !prev.some((i) => i.id === item.id)),
      ]);
      setList2((prev) => prev.filter((item) => !selectedRight.includes(item)));
      setSelectedRight([]);
    }
  };

  const EmptyItem = () => {
    return (
      <div className={clsx(styles.empty, styles["left-item"])}>
        <span>No items</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {list1?.length === 0 ? (
        <EmptyItem />
      ) : (
        <div className={styles["left-item"]}>
          {list1.map((item: TransferListItemType) => (
            <CheckboxComponent
              className={styles.row}
              key={`left-${item.id}`}
              label={item.name}
              color={color}
              onClick={() => selectedID(item, "left")}
            />
          ))}
        </div>
      )}

      <div className={styles.icons}>
        <IconButtonComponent
          className={styles.icon}
          name="arrows-right-line"
          onClick={() => transferItems("right")}
        />
        <IconButtonComponent
          className={styles.icon}
          name="right-line"
          onClick={() => transferEachItem("right")}
        />
        <IconButtonComponent
          className={styles.icon}
          name="left-line"
          onClick={() => transferEachItem("left")}
        />
        <IconButtonComponent
          className={styles.icon}
          name="arrows-left-line"
          onClick={() => transferItems("left")}
        />
      </div>

      {list2?.length === 0 ? (
        <EmptyItem />
      ) : (
        <div className={styles["right-item"]}>
          {list2.map((item: TransferListItemType) => (
            <CheckboxComponent
              className={styles.row}
              key={`right-${item.id}`}
              label={item.name}
              color={color}
              onClick={() => selectedID(item, "right")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
