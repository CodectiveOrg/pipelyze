"use client";

import { MouseEvent, ReactElement, useEffect, useState } from "react";

import UploadSvg from "@/illustrations/upload/upload.illustration";
import { useDropzone } from "react-dropzone";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import TypographyComponent from "@/components/typography/typography.component";

import styles from "./upload.module.css";

interface FileWithPreview extends File {
  preview: string;
}

export default function UploadIllustration(): ReactElement {
  const [file, setFile] = useState<FileWithPreview | null>(null);

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const acceptedFile = acceptedFiles[0];
        setFile(
          Object.assign(acceptedFile, {
            preview: URL.createObjectURL(acceptedFile),
          }),
        );
      }
    },
  });

  function removeFile(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();

    console.log("removeFile");
    if (file) {
      console.log("removeFile", file);

      URL.revokeObjectURL(file.preview);
      setFile(null);
    }
  }

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  });

  return (
    <div
      className={file ? styles["preview-container"] : styles.dropzone}
      {...getRootProps()}
    >
      <input tabIndex={-1} type="file" {...getInputProps()} />
      {file ? (
        <div className={styles.preview}>
          <img
            key={file.name}
            src={file.preview}
            className={styles.img}
            alt={file.name}
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
          <IconButtonComponent
            name="close-fill"
            color="inherit"
            onClick={removeFile}
            className={styles.btn}
          />
        </div>
      ) : (
        <>
          <UploadSvg />
          <TypographyComponent variant="h6">
            Drop or select file
          </TypographyComponent>
          <TypographyComponent
            variant="body2"
            color="text-secondary"
            className={styles.link}
          >
            Drop files here or click to <span>browse</span> through your
            machine.
          </TypographyComponent>
        </>
      )}
    </div>
  );
}
