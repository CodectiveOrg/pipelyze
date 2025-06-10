import { Dispatch, ReactNode, SetStateAction } from "react";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import IconComponent from "@/components/icon/icon.component";
import TypographyComponent from "@/components/typography/typography.component";

import { byteToMegaByte } from "@/utils/number.utils";

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
        <IconComponent name="document-2-fill" color="primary" fontSize="2rem" />
        <div className={styles["file-details"]}>
          <TypographyComponent variant="subtitle2">
            {file.name}
          </TypographyComponent>
          <TypographyComponent variant="caption" color="text-secondary">
            {byteToMegaByte(file.size)} MB
          </TypographyComponent>
        </div>
        <IconButtonComponent
          name="close-fill"
          color="action"
          size="small"
          onClick={removeFile}
          className={styles.btn}
        />
      </div>
    </div>
  );
}
