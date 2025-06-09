"use client";

import { ReactElement } from "react";

import UploadSvg from "@/illustrations/upload/upload.illustration";
import { useDropzone } from "react-dropzone";

import ButtonComponent from "@/components/button/button.component";
import IconButtonComponent from "@/components/icon-button/icon-button.component";
import IconComponent from "@/components/icon/icon.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./upload.module.css";

export default function UploadIllustration(): ReactElement {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      <span>
        <IconComponent
          name="document-2-fill"
          fontSize="2rem"
          color={"primary"}
        />
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
        className={styles.btn}
      />
    </li>
  ));

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
      {files.length > 0 && (
        <div className={styles["selected-file"]}>
          <ul>{files}</ul>
          <div className={styles.action}>
            <ButtonComponent
              fontSize={"small"}
              color={"inherit"}
              variant={"outlined"}
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
      )}
    </>
  );
}
