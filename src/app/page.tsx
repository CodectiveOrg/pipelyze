import IconComponent from "./components/icon/icon.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <IconComponent color="red" name="ai" />
      Hello, friend!
    </div>
  );
}
