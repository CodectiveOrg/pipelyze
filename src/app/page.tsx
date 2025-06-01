import CheckboxComponent from "@/components/checkbox/checkbox.component";
import styles from "./page.module.css";

export default function Page() {
  return <div className={styles.page}>
    <CheckboxComponent size="small"/>
    Hello, friend!</div>;
}
