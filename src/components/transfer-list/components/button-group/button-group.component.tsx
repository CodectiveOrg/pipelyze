import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";
import { Item } from "@/components/transfer-list/transfer-list.component";

import styles from "./button-group.module.css";

type Action = () => void;

type Props = {
  left: readonly Item[];
  right: readonly Item[];
  onMoveAllItemsToTheRight: Action;
  onMoveCheckedItemsToTheRight: Action;
  onMoveCheckedItemsToTheLeft: Action;
  onMoveAllItemsToTheLeft: Action;
};

export default function ButtonGroupComponent(props: Props): ReactNode {
  return (
    <div className={styles["button-group"]}>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={props.left.length === 0}
        onClick={props.onMoveAllItemsToTheRight}
      >
        <IconComponent name="arrows-right-line" />
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={props.left.some((item) => item.isChecked)}
        onClick={props.onMoveCheckedItemsToTheRight}
      >
        <IconComponent name="right-line" />
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={props.right.some((item) => item.isChecked)}
        onClick={props.onMoveCheckedItemsToTheLeft}
      >
        <IconComponent name="left-line" />
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={props.right.length === 0}
        onClick={props.onMoveAllItemsToTheLeft}
      >
        <IconComponent name="arrows-left-line" />
      </ButtonComponent>
    </div>
  );
}
