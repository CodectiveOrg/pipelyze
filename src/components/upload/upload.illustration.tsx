import { ReactElement } from "react";

import UploadSvg from "@/illustrations/upload/upload.illustration";

import TypographyComponent from "@/components/typography/typography.component";

import styles from "./upload.module.css";

export default function UploadIllustration(): ReactElement {
  return (
    <label className={styles.upload}>
      <input tabIndex={-1} type="file" />
      <UploadSvg />
      <TypographyComponent variant="h6">
        Drop or select file
      </TypographyComponent>
      <TypographyComponent
        variant="body2"
        color="text-secondary"
        className={styles.link}
      >
        Drop files here or click to <span>browse</span> through your machine.
      </TypographyComponent>
    </label>
  );
}
