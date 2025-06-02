"use client";

import React, { ComponentProps, PropsWithChildren, ReactElement } from "react";

import clsx from "clsx";

import RadioComponent from "@/components/radio/radio.component";

import styles from "./radio-group.module.css";

type Props = PropsWithChildren<{
  name: string;
  items: ComponentProps<typeof RadioComponent>[];
  row?: boolean;
}>;

export default function RadioGroupComponent({
  name,
  items,
  row = false,
}: Props): ReactElement {
  return (
    <div
      className={clsx(styles["radio-group"], row ? styles.row : styles.column)}
    >
      {items.map((item, index) => (
        <RadioComponent key={index} name={name} {...item} />
      ))}
    </div>
  );
}
