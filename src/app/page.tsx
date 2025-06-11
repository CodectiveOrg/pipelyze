import CheckBoxComponent from "@/components/checkbox/checkbox.component";
import styles from "./page.module.css";

export default function Page() {
  return <div className={styles.page}>
    <CheckBoxComponent/>
    Hello, friend!</div>;
}
