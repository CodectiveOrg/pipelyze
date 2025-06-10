"use client";

import { ReactElement, useCallback, useState } from "react";

import UploadSvg from "@/illustrations/upload/upload.illustration";
import { useDropzone } from "react-dropzone";

import ButtonComponent from "@/components/button/button.component";
import IconButtonComponent from "@/components/icon-button/icon-button.component";
import IconComponent from "@/components/icon/icon.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./upload.module.css";

type Props = {
  maxSize?: number; //Maximum file size (in bytes)
  minSize?: number; //Minimum file size (in bytes)
  accept?: {
    "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"];
    "text/*": [".pdf", ".doc", ".docx", ".txt"];
  };
};

export default function UploadComponent({
  maxSize,
  minSize,
  accept,
}: Props): ReactElement {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: maxSize,
    minSize: minSize,
    accept: accept,
    onDrop,
  });

  function removeFile() {
    setFile(null);
  }

  const preview = file ? (
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
  ) : null;

  return (
    <>
      <div className={styles.upload} {...getRootProps()}>
        <input tabIndex={-1} type="file" {...getInputProps()} />
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
      </div>
      {preview}
    </>
  );
}
