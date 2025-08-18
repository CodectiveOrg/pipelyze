import type { ReactNode } from "react";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./sidebar.module.css";

type Props = {
  open?: boolean;
  title: string;
  button: ReactNode;
  onClose: () => void;
  children: ReactNode;
};

export default function SidebarComponent({
  open = false,
  title,
  button,
  onClose,
  children,
}: Props): ReactNode {
  if (!open) {
    return;
  } else {
    return (
      <div className={styles.sidebar}>
        <header>
          <TypographyComponent variant="h6">{title}</TypographyComponent>
          {button}
          <IconButtonComponent
            name="close-line"
            size="small"
            onClick={() => onClose()}
          />
        </header>
        <div>{children}</div>
      </div>
    );
  }
}
