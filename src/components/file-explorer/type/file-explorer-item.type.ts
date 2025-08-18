import { FileExplorerFileExtension } from "@/components/file-explorer/type/file-explorer-file-extension.type";

export type FileExplorerItemType = {
  id: number;
  title: string;
  size: number;
  filename: FileExplorerFileExtension;
  updatedAt: Date;
};
