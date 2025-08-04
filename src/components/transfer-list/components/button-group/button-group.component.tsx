import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";
import { Item } from "@/components/transfer-list/transfer-list.component";

import styles from "./button-group.module.css";

type Props = {
  items: readonly Item[];
  onMoveAllItems: (position: "left" | "right") => void;
  onMoveCheckedItems: (position: "left" | "right") => void;
};

export default function ButtonGroupComponent({
  items,
  onMoveAllItems,
  onMoveCheckedItems,
}: Props): ReactNode {
  return (
    <div className={styles["button-group"]}>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={!items.some((item) => item.position === "left")}
        onClick={() => onMoveAllItems("right")}
      >
        <IconComponent name="arrows-right-line" />
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={
          !items.some((item) => item.position === "left" && item.isChecked)
        }
        onClick={() => onMoveCheckedItems("right")}
      >
        <IconComponent name="right-line" />
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={
          !items.some((item) => item.position === "right" && item.isChecked)
        }
        onClick={() => onMoveCheckedItems("left")}
      >
        <IconComponent name="left-line" />
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={!items.some((item) => item.position === "right")}
        onClick={() => onMoveAllItems("left")}
      >
        <IconComponent name="arrows-left-line" />
      </ButtonComponent>
    </div>
  );
}
