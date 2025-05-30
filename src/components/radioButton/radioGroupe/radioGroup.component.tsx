"use client";

import React, { PropsWithChildren, ReactElement, createContext } from "react";

import clsx from "clsx";

import styles from "./radioGroupe.module.css";

type contextProps = {
  value: string;
  onChange: (value: string) => void;
};

export const MyContext = createContext<contextProps>(null);

type Direction = "row" | "column";

type Props = PropsWithChildren<{
  value: string;
  onChange: (value: string) => void;
  direction: Direction;
  className: string;
}>;

export default function RadioGroupComponent({
  className,
  children,
  value,
  onChange,
  direction,
}: Props): ReactElement {
  return (
    <MyContext.Provider value={{ value, onChange }}>
      <div className={clsx(styles[direction], styles.RadioGroup, className)}>
        {children}
      </div>
    </MyContext.Provider>
  );
}
