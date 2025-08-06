import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";
import TextFieldComponent from "@/components/text-field/text-field.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./file-explorer-top-bar.module.css";

type Props = {
  onOpen: () => void;
};

export default function FileExplorerTopBarComponent({
  onOpen,
}: Props): ReactNode {
  return (
    <div className={styles["file-explorer-top-bar"]}>
      <TextFieldComponent
        label="Search"
        placeholder="Search..."
        startAdornment={<IconComponent name="search-line" />}
      />
      <ButtonComponent
        variant="text"
        color="inherit"
        size="medium"
        endIcon="filter-2-fill"
        onClick={onOpen}
      >
        <TypographyComponent variant="button" color="inherit">
          Filters
        </TypographyComponent>
      </ButtonComponent>
    </div>
  );
}
