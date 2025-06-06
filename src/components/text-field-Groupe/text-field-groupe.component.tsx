import React, { ComponentProps, ReactElement } from "react";

import TextFieldComponent from "../text-field/text-field.component";

import styles from "./text-field-groupe.module.css";

type Prop = {
  items: ComponentProps<typeof TextFieldComponent>[];
};

export default function TextFieldGroupeComponent({
  items,
}: Prop): ReactElement {
  return (
    <div className={styles["text-field-group"]}>
      {items.map((item, index) => {
        return <TextFieldComponent key={index} {...item} />;
      })}
    </div>
  );
}
