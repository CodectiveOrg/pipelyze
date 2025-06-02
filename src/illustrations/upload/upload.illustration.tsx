import { ReactElement } from "react";

import UploadSvg from "@/assets/illustrations/Upload.svg";

import styles from "./upload.illustration.module.css";

export default function UploadIllustration(): ReactElement {
  return (
    <div className={styles.upload}>
      <label>
        <input tabIndex={-1} type="file" />
        <div className={styles.text}>
          <UploadSvg className={styles.img} />
          <div className={styles.placeholder}>
            <div className={styles.title}>Drop or select file</div>
            <div className={styles.description}>
              Drop files here or click to browse through your machine.
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
