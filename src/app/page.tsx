import TypographyComponent from "@/components/typography/typography.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <TypographyComponent variant="h2" color="text-disabled">
        <span>Lorem ipsum dolor sit</span>
      </TypographyComponent>

      <TypographyComponent variant="h2">
        Neque doloribus
        <span className={styles.title}> pipelyze</span>
      </TypographyComponent>

      <TypographyComponent variant="subtitle1">
        The starting point for your next project is based on MUI. Easy
        <br />
        customization helps you build apps faster and better.
      </TypographyComponent>
    </div>
  );
}
