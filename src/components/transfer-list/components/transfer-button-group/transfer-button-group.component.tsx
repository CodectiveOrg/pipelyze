import { ReactNode } from "react";

import TransferButtonComponent from "@/components/transfer-list/components/transfer-button/transfer-button.component";
import { TransferListItemPosition } from "@/components/transfer-list/types/transfer-list-item-position.type";
import { TransferListItem } from "@/components/transfer-list/types/transfer-list-item.type";

import styles from "./transfer-button-group.module.css";

type Props = {
  items: readonly TransferListItem[];
  onMoveAllItems: (position: TransferListItemPosition) => void;
  onMoveCheckedItems: (position: TransferListItemPosition) => void;
};

export default function TransferButtonGroupComponent({
  items,
  onMoveAllItems,
  onMoveCheckedItems,
}: Props): ReactNode {
  return (
    <div className={styles["transfer-button-group"]}>
      <TransferButtonComponent
        items={items}
        icon="arrows-right-line"
        enabled={(item) => item.position === "left"}
        onClick={() => onMoveAllItems("right")}
      />
      <TransferButtonComponent
        items={items}
        icon="right-line"
        enabled={(item) => item.position === "left" && item.isChecked}
        onClick={() => onMoveCheckedItems("right")}
      />
      <TransferButtonComponent
        items={items}
        icon="left-line"
        enabled={(item) => item.position === "right" && item.isChecked}
        onClick={() => onMoveCheckedItems("left")}
      />
      <TransferButtonComponent
        items={items}
        icon="arrows-left-line"
        enabled={(item) => item.position === "right"}
        onClick={() => onMoveAllItems("left")}
      />
    </div>
  );
}
