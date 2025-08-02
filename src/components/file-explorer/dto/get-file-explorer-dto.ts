export type GetFileExplorerDto = {
  id: number;
  name: string;
  size: number;
  type: "Folder" | "jpg" | string;
  modified: string;
  shared: object[];
  liked: boolean;
};
