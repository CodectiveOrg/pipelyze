import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";

export const FILE_EXPLORE_MOCK_ITEMS: FileExplorerItemType[] = [
  {
    id: 1,
    title: "Docs",
    size: 12460000,
    type: "folder",
    modifiedAt: new Date("2025-08-03T09:08:43.996Z"),
    isFavorite: true,
  },
  {
    id: 2,
    title: "Projects",
    size: 381.47,
    type: "folder",
    modifiedAt: new Date("2025-08-02T10:23:21.005Z"),
    isFavorite: false,
  },
  {
    id: 3,
    title: "Work",
    size: 45805,
    type: "file",
    modifiedAt: new Date("2025-08-04T22:56:12.548Z"),
    isFavorite: true,
  },
  {
    id: 4,
    title: "Cover",
    size: 100000,
    type: "file",
    modifiedAt: new Date("2025-08-01T18:14:09.637Z"),
    isFavorite: false,
  },
] as const;
