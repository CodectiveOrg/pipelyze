import { Snackbar } from "@/components/snackbar/snackbarcomponent";
import styles from "./page.module.css";

export default function Page() {
  return <div className={styles.page}>
    <Snackbar  varient="Success" color="success" />
    Hello, friend!</div>;
}
