import { ReactElement } from "react";

import IconComponent from "@/components/icon/icon.component";

import styles from "./navigation-bar.module.css";

type NavItem = {
  title: string;
  icon: ReactElement<typeof IconComponent>;
  subtitle?: string;
};

type Props = {
  items: NavItem[];
};

export default function NavigationBarComponent({ items }: Props): ReactElement {
  return (
    <div className={styles["navigation-bar"]}>
      <nav className={styles.nav}>
        <button className={styles.hamburger}>
          <IconComponent name={"menu-line"} color={"primary"}></IconComponent>
        </button>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.title}>
                <a href="https://google.com">
                  {item.icon}
                  <span>
                    <span>{item.title}</span>
                    <span>{item?.subtitle}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={styles["vertical-nav"]}>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.title}>
                <a href="https://google.com">
                  {item.icon}
                  <span>
                    <span>{item.title}</span>
                    <span>{item?.subtitle}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
