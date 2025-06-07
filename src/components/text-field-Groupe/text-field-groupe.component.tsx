import React, { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import TextFieldComponent from "../text-field/text-field.component";

import styles from "./text-field-groupe.module.css";

type Prop = {
  row: boolean;
  items: ComponentProps<typeof TextFieldComponent>[];
};

export default function TextFieldGroupeComponent({
  row = true,
  items,
}: Prop): ReactElement {
  return (
    <div className={clsx(styles["text-field-group"], row && styles.row)}>
      {items.map((item, index) => {
        return <TextFieldComponent key={index} {...item} />;
      })}
    </div>
  );
}
