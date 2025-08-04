import { FileExplorerItemType } from "@/components/file-explorer/type/file-explorer-item.type";

export const FILE_EXPLORE_MOCK_ITEMS: FileExplorerItemType[] = [
  {
    id: 1,
    name: "Docs",
    size: 12460000,
    type: "Folder",
    modified: new Date("2025-08-03T09:08:43.996Z"),
    shared: [
      { username: "bijanprogrammer", id: 1001, picture: "" },
      { username: "zahrazare", id: 2002, picture: "" },
    ],
    liked: true,
  },
  {
    id: 2,
    name: "Projects",
    size: 381.47,
    type: "Folder",
    modified: new Date("2025-08-02T10:23:21.005Z"),
    shared: [{ username: "rezamazaheri", id: 3003, picture: "" }],
    liked: false,
  },
  {
    id: 3,
    name: "Work",
    size: 45805,
    type: "jpg",
    modified: new Date("2025-08-04T22:56:12.548Z"),
    shared: [],
    liked: true,
  },
  {
    id: 4,
    name: "Cover",
    size: 100000,
    type: "jpg",
    modified: new Date("2025-08-01T18:14:09.637Z"),
    shared: [
      { username: "bijanprogrammer", id: 1001, picture: "" },
      { username: "zahrazare", id: 2002, picture: "" },
      { username: "rezamazaheri", id: 3003, picture: "" },
    ],
    liked: false,
  },
] as const;
