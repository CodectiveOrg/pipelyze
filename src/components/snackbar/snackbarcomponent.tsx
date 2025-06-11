import clsx from "clsx";

import { ColorType } from "@/types/color.type";

import IconButtonComponent from "../icon-button/icon-button.component";
import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./snackbar.module.css";

type props = {
  color: ColorType;
  varient: "Success" | "Info" | "Default" | "Warning" | "Error";
};

export const Snackbar = ({ color, varient }: props) => {
  return (
    <section>
      <div className={clsx(styles.snackbar, color, styles[varient])}>
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
