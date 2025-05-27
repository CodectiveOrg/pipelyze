import IconComponent from "./components/icon/icon.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <IconComponent name="home" />
      Hello, friend!
    </div>
  );
}
