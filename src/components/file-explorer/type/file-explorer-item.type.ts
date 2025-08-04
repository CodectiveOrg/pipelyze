export type FileExplorerItemType = {
  id: number;
  name: string;
  size: number;
  type: "Folder" | "jpg" | string;
  modified: Date;
  shared: object[];
  liked: boolean;
};
