import clsx from "clsx";

import { PropsWithChildren, ReactElement } from "react";

import styles from './typography.module.css'
import { TypographyType, Variant } from "@/types/typography.type";


type Props = PropsWithChildren<{
  variant: Variant;
  className?: string;
  color: TypographyType;
}>;

export default function TypographyComponent({
  variant,
  children,
  className,
  color
}: Props): ReactElement {
  return <div className={clsx(className, variant, styles[color])}>{children}</div>;
}
