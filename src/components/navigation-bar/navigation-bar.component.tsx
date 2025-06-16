import { ReactElement } from "react";

import Link from "next/link";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component";

import styles from "./navigation-bar.module.css";

type NavItem = {
  title: string;
  subtitle?: string;
  icon: ReactElement<typeof IconComponent>;
  active?: boolean;
  href?: string;
  onClick?: VoidFunction;
};

type Props = {
  variant?: "horizontal" | "vertical";
  items: NavItem[];
};

export default function NavigationBarComponent({
  variant = "horizontal",
  items,
}: Props): ReactElement {
  return (
    <div className={clsx(styles["navigation-bar"], styles[variant])}>
      <nav>
        <ul>
          {items.map((item) => (
            <NavItemComponent key={item.title} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

type NavItemContentProps = {
  item: NavItem;
};

function NavItemComponent({ item }: NavItemContentProps): ReactElement {
  const content = (
    <>
      <span className={styles.icon}>{item.icon}</span>
      <span className={clsx("subtitle2", styles.title)}>{item.title}</span>
      {item.subtitle && (
        <span className={clsx("caption", styles.subtitle)}>
          {item.subtitle}
        </span>
      )}
    </>
  );

  return (
    <li key={item.title} className={clsx(item.active && styles.active)}>
      {item.href ? (
        <Link href={item.href}>{content}</Link>
      ) : (
        <button onClick={() => item.onClick?.()}>{content}</button>
      )}
    </li>
  );
}
