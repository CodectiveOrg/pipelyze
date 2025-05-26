import clsx from 'clsx'
import { PropsWithChildren, ReactElement } from 'react';

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "button";

type Props =PropsWithChildren<{
  variant: Variant;
  className?: string;
}>



export default function TypographyComponent ({ variant, children, className }: Props) : ReactElement{

  return <div className={clsx(className, variant)}>{children}</div>;
}


