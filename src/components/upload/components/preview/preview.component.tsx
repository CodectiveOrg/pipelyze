import { Dispatch, ReactNode, SetStateAction } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconButtonComponent from "@/components/icon-button/icon-button.component";
import IconComponent from "@/components/icon/icon.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./preview.module.css";

type Props = {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
};

export default function PreviewComponent({ file, setFile }: Props): ReactNode {
  function removeFile() {
    setFile(null);
  }

  if (!file) {
    return null;
  }

  return (
    <div className={styles["selected-file-container"]}>
      <div className={styles["selected-file"]}>
        <span>
          <IconComponent name="document-2-fill" fontSize="2rem" />
        </span>
        <div className={styles["file-details"]}>
          <TypographyComponent variant="subtitle2">
            {file.name}
          </TypographyComponent>
          <TypographyComponent variant="caption">
            {file.size} kb
          </TypographyComponent>
        </div>
        <IconButtonComponent
          name="close-fill"
          color="inherit"
          onClick={removeFile}
          className={styles.btn}
        />
      </div>
      <div className={styles.action}>
        <ButtonComponent
          fontSize={"small"}
          color={"inherit"}
          variant={"outlined"}
          onClick={removeFile}
        >
          Remove all
        </ButtonComponent>
        <ButtonComponent
          fontSize={"small"}
          color={"inherit"}
          variant={"contained"}
          startIcon="upload-3-fill"
        >
          Upload
        </ButtonComponent>
      </div>
    </div>
  );
}
