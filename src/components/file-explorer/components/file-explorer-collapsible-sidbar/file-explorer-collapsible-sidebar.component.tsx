import type { ReactNode } from "react";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import TextFieldComponent from "@/components/text-field/text-field.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./file-explorer-collapsible-sidebar.module.css";

type Props = {
  isOpen: boolean;
};

export default function FileExplorerCollapsibleSidebarComponent({
  isOpen,
}: Props): ReactNode {
  if (isOpen)
    return (
      <div className={styles["file-explorer-collapsible-sidebar"]}>
        <div className={styles.header}>
          <TypographyComponent variant="h6" color="text-primary">
            Filters
          </TypographyComponent>
          <div className={styles.actions}>
            <IconButtonComponent
              name="refresh-1-line"
              size="small"
              className={styles.icon}
            />
            <IconButtonComponent name="close-line" size="small" />
          </div>
        </div>

        <div>
          <TextFieldComponent label="Start" />
          <TextFieldComponent label="End" />
        </div>
      </div>
    );
  else return <></>;
}
