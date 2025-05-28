import HeroComponent from "@/components/hero/hero..component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <HeroComponent />
    </div>
  );
}
