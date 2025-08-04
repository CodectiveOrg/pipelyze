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
      <ListButton
        items={items}
        icon="arrows-right-line"
        enabled={(item) => item.position === "left"}
        onClick={() => onMoveAllItems("right")}
      />
      <ListButton
        items={items}
        icon="right-line"
        enabled={(item) => item.position === "left" && item.isChecked}
        onClick={() => onMoveCheckedItems("right")}
      />
      <ListButton
        items={items}
        icon="left-line"
        enabled={(item) => item.position === "right" && item.isChecked}
        onClick={() => onMoveCheckedItems("left")}
      />
      <ListButton
        items={items}
        icon="arrows-left-line"
        enabled={(item) => item.position === "right"}
        onClick={() => onMoveAllItems("left")}
      />
    </div>
  );
}

type ListButtonProps = {
  items: readonly Item[];
  icon: string;
  enabled: (item: Item) => boolean;
  onClick: () => void;
};

function ListButton({
  items,
  icon,
  enabled,
  onClick,
}: ListButtonProps): ReactNode {
  return (
    <ButtonComponent
      variant="outlined"
      color="inherit"
      disabled={!items.some(enabled)}
      onClick={onClick}
    >
      <IconComponent name={icon} />
    </ButtonComponent>
  );
}
