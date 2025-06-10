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
    <div className={styles.preview}>
      <IconComponent
        className={styles.thumbnail}
        name="document-2-fill"
        color="primary"
        fontSize="2.25rem"
      />
      <TypographyComponent className={styles.name} variant="subtitle2">
        {file.name}
      </TypographyComponent>
      <TypographyComponent
        className={styles.size}
        variant="caption"
        color="text-secondary"
      >
        {byteToMegaByte(file.size)} MB
      </TypographyComponent>
      <IconButtonComponent
        className={styles.remove}
        name="close-line"
        color="action"
        size="small"
        onClick={removeFile}
      />
    </div>
  );
}
