"use client";

import React, { useEffect, useState } from "react";

import styles from "./icon.module.css";

export default function IconComponent({
  color,
  name,
}: {
  color: string;
  name: string;
}) {
  const [svgContent, setSvgContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const response = await fetch(
          `https://api.iconify.design/mingcute:${name.toLocaleLowerCase()}-fill.svg`,
        );
        const svg = await response.text();
        setSvgContent(svg);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };
    fetchIcon();
  }, [name]);

  return (
    <div
      className={styles.icon}
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
