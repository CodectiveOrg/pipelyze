import React from "react";

import clsx from "clsx";

import { ListItem } from "@/types/list-item..type";

import CheckboxComponent from "../checkbox/checkbox.component";
import IconButtonComponent from "../icon-button/icon-button.component";

import styles from "./transfer-list.module.css";

interface TransferListProps {
  items1: ListItem[];
  items2: ListItem[];
}

const EmptyItem = () => {
  return (
    <div>
      <span>No items</span>
    </div>
  );
};

export default function TransferListComponent({
  items1,
  items2,
}: TransferListProps) {
  return (
    <div className={styles.container}>
      {items1?.length === 0 ? (
        <EmptyItem />
      ) : (
        <div className={styles["left-item"]}>
          {items1.map((item: ListItem) => (
            <CheckboxComponent key={item.id} label={item.name} />
          ))}
        </div>
      )}

      <div className={styles.icons}>
        <IconButtonComponent name="right-line" />
        <IconButtonComponent name="arrows-right-line" />
        <IconButtonComponent name="left-line" />
        <IconButtonComponent name="arrows-left-line" />
      </div>

      <div className={styles["right-item"]}>
        {items2.map((item: ListItem) => (
          <CheckboxComponent key={item.id} label={item.name} />
        ))}
      </div>
    </div>
  );
}
