export type FileExplorerItemType = {
  id: number;
  title: string;
  size: number;
  type: "folder" | "file";
  modifiedAt: Date;
  isFavorite: boolean;
};
