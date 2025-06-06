import { ComponentProps, PropsWithChildren, ReactElement } from "react";

import clsx from "clsx";

import CheckBoxComponent from "../checkbox/checkbox.component";

import styles from "./checkbox-group.module.css";

type Props = PropsWithChildren<{
  name: string;
  items: ComponentProps<typeof CheckBoxComponent>[];
  row?: boolean;
}>;

export default function CheckboxGroupComponent({
  name,
  items,
  row = false,
}: Props): ReactElement {
  return (
    <div
      className={clsx(
        styles["checkbox-group"],
        row ? styles.row : styles.column,
      )}
    >
      {items.map((item, index) => (
        <CheckBoxComponent key={index} name={name} {...item} />
      ))}
    </div>
  );
}
