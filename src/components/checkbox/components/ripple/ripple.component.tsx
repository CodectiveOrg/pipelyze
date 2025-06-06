import { ReactElement } from "react";

import clsx from "clsx";

import styles from "./ripple.module.css";

type Props = {
  className?: string;
};

export default function RippleComponent({ className }: Props): ReactElement {
  return <span className={clsx(styles.ripple, className)}></span>;
}
