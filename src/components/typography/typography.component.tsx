import clsx from "clsx";

import { PropsWithChildren, ReactElement } from "react";

import styles from './typography.module.css'


type Props = PropsWithChildren<{
  variant: Variant;
  className?: string;
}>;

export default function TypographyComponent({
  variant,
  children,
  className,
}: Props): ReactElement {
  return <div className={clsx(className, variant)}>{children}</div>;
}
