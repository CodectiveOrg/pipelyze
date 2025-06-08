import TextFieldComponent from "@/components/text-field/text-field.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <form>
        <TextFieldComponent error label="Enabled" />
      </form>
    </div>
  );
}
