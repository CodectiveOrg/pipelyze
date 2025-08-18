"use client";

import React, { ReactNode, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import TextFieldComponent from "@/components/text-field/text-field.component";
import TypographyComponent from "@/components/typography/typography.component";
import UploadComponent from "@/components/upload/upload.component";

import styles from "./file-explorer-upload-form.module.css";

export default function FileExplorerUploadFormComponent(): ReactNode {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleReset = (): void => {
    setTitle("");
    setFile(null);
    setTitleError(null);
    setFileError(null);
    setError(null);
  };

  const validateForm = (): boolean => {
    let valid = true;
    setTitleError(null);
    setFileError(null);

    if (!title.trim()) {
      setTitleError("Title is required.");
      valid = false;
    }
    if (!file) {
      setFileError("File is required.");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("dataset", file as File);

      const res = await fetch("/api/dataset", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to upload.");
      } else {
        setSuccess(data.message || "File uploaded!");

        setTimeout(() => {
          setSuccess(null);
        }, 3000);

        handleReset();
      }
    } catch (err) {
      setError("Network error. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles["upload-form"]}>
      <TypographyComponent variant="subtitle1">Add Files</TypographyComponent>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <TextFieldComponent
          label="title"
          type="text"
          size="small"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (titleError) {
              setTitleError(null);
            }
          }}
          error={Boolean(titleError)}
        />
        {titleError && (
          <TypographyComponent variant="caption" color="error">
            {titleError}
          </TypographyComponent>
        )}
        <UploadComponent
          file={file}
          setFile={setFile}
          controlFileError={() => {
            if (fileError) {
              setFileError(null);
            }
          }}
          name="dataset"
        />
        {fileError && (
          <TypographyComponent variant="caption" color="error">
            {fileError}
          </TypographyComponent>
        )}
        <div className={styles["button-actions"]}>
          <ButtonComponent type="reset" variant="outlined" disabled={loading}>
            reset
          </ButtonComponent>
          <ButtonComponent
            startIcon="upload-3-fill"
            type="submit"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload file"}
          </ButtonComponent>
        </div>
        <div>
          {error && (
            <TypographyComponent variant="caption" color="error">
              {error}
            </TypographyComponent>
          )}
          {success && (
            <TypographyComponent variant="caption" color="success">
              {success}
            </TypographyComponent>
          )}
        </div>
      </form>
    </div>
  );
}
