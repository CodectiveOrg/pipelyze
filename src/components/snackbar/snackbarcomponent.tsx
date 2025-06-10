import IconButtonComponent from "../icon-button/icon-button.component";
import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./snackbar.module.css";

export const Snackbar = ({}) => {
  return (
    <section>
      <div className={styles.snackbar}>
        <div className={styles["snackbar-icon"]}>
          <IconComponent
            name="information-fill"
            color="info"
            fontSize={"1.5rem"}
          />
        </div>
        <div className={styles["snackbar-content"]}>
          <TypographyComponent variant="body2">
            This is an default
          </TypographyComponent>
        </div>

        <IconButtonComponent
          className={styles["snackbar-close-button"]}
          name="close-line"
        />
      </div>
    </section>
  );
};
