"use client";

import { ReactElement, useCallback, useState } from "react";

import { DropzoneOptions, useDropzone } from "react-dropzone";

import TypographyComponent from "@/components/typography/typography.component";
import PreviewComponent from "@/components/upload/components/preview/preview.component";

import UploadSvg from "@/illustrations/upload/upload.illustration";

import styles from "./upload.module.css";

type Props = {
  options?: Omit<DropzoneOptions, "maxFiles" | "onDrop">;
};

export default function UploadComponent({ options }: Props): ReactElement {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    ...options,
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className={styles.upload}>
      <div className={styles.dropzone} {...getRootProps()}>
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
      <PreviewComponent file={file} setFile={setFile} />
    </div>
  );
}
