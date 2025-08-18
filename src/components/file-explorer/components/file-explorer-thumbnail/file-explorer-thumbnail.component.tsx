import type { ComponentProps, ReactNode } from "react";

import Image from "next/image";

import { FileExplorerFileExtension } from "@/components/file-explorer/type/file-explorer-file-extension.type";

type Props = {
  filename: FileExplorerFileExtension;
};

export default function FileExplorerThumbnailComponent({
  filename,
}: Props): ReactNode {
  const commonProps: Partial<ComponentProps<typeof Image>> = {
    width: 36,
    height: 36,
  };

  switch (filename) {
    case "folder":
      return (
        <Image {...commonProps} src="/assets/thumbnails/ic-folder.svg" alt="" />
      );
    case "xlsx":
      return (
        <Image {...commonProps} src="/assets/thumbnails/ic-excel.svg" alt="" />
      );
    default:
      return (
        <Image {...commonProps} src="/assets/thumbnails/ic-file.svg" alt="" />
      );
  }
}
