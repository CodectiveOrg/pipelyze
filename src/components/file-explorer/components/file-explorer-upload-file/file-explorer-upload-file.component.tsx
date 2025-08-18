"use client";

import { type ReactNode, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./file-explorer-upload-file.module.css";

export default function FileExplorerUploadFileComponent(): ReactNode {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles["file-explorer-upload"]}>
      <TypographyComponent variant="subtitle1">
        File Manager
      </TypographyComponent>
      <ButtonComponent
        startIcon="upload-3-fill"
        className={styles["upload-button"]}
        onClick={() => {
          setOpen((is) => !is);
        }}
      >
        Upload
      </ButtonComponent>
      {open && (
        <div className={styles["upload-modal-status"]}>UploadComponent</div>
      )}
    </div>
  );
}
