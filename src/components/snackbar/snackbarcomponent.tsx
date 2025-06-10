// import clsx from "clsx";
// import { ColorType } from "@/types/color.type";
import IconButtonComponent from "../icon-button/icon-button.component";
import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./snackbar.module.css";

// type AleartProps = {
//   variant: "success" | "info" | "warning" | "error" | "loading" | "default";
//   position?:
//     | "top-right"
//     | "top-left"
//     | "bottom-right"
//     | "bottom-left"
//     | "top-center"
//     | "bottom-center";
//   icon?: React.ReactNode;
//   message?: string;
//   title?: string;
//   description?: string;
//   onClose?: () => void;
//   color?: ColorType;
//   actionText?: string;
//   onAction?: () => void;
//   closeText?: string;
// };

export const Snackbar = (
  {
    // variant = "default",
    // icon,
    // message,
    // title,
    // onClose,
    // description,
    // color = "inherit",
    // actionText,
    // closeText = "Dismiss",
    // onAction,
  },
) => {
  return (
    <section>
      <div className={styles.snackbar}>
        <div className={styles["snackbar-main"]}>
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

          <IconButtonComponent name="close-line" />
        </div>
      </div>
    </section>
  );
};
