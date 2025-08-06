import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import FileExplorerCollapsibleSidebarComponent from "@/components/file-explorer/components/file-explorer-collapsible-sidbar/file-explorer-collapsible-sidebar.component";
import TextFieldComponent from "@/components/text-field/text-field.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./file-explorer-top-bar.module.css";

export default function FileExplorerTopBarComponent(): ReactNode {
  // const openCollasibleSidebar = () => {
  //   console.log("Filter");
  // };

  return (
    <div className={styles["file-explorer-top-bar"]}>
      <TextFieldComponent label="Search" />
      <ButtonComponent
        variant="text"
        color="inherit"
        size="medium"
        endIcon="filter-2-fill"
      >
        <TypographyComponent variant="button" color="inherit">
          Filters
        </TypographyComponent>
      </ButtonComponent>

      <FileExplorerCollapsibleSidebarComponent />
    </div>
  );
}
