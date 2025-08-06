import { ReactNode } from "react";

import HeroComponent from "@/components/hero/hero.component";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  return (
    <div className={styles.page}>
      <HeroComponent />
    </div>
  );
}
