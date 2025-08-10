"use client";

import { type ReactNode, useEffect, useRef } from "react";

import DialogComponent from "@/components/dialog/dialog.component++";

export default function Page(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <DialogComponent open={true} close={() => {}} ref={dialogRef} title="TITLE">
      <p>Paragraph</p>
    </DialogComponent>
  );
}
