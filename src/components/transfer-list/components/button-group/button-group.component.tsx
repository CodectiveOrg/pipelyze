import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";

import styles from "./button-group.module.css";

type Action = () => void;

type Props = {
  left: readonly string[];
  right: readonly string[];
  leftChecked: string[];
  rightChecked: string[];
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
        disabled={props.leftChecked.length === 0}
        onClick={props.onMoveCheckedItemsToTheRight}
      >
        <IconComponent name="right-line" />
      </ButtonComponent>
      <ButtonComponent
        variant="outlined"
        color="inherit"
        disabled={props.rightChecked.length === 0}
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
