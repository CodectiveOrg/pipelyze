import styles from "./page.module.css";
import IconComponent from "./components/icon/icon.component";

export default function Page() {
  return <div className={styles.page}>
    <IconComponent color="red" name="ai"/>
    Hello, friend!</div>;
}
