import { ExtendedIconifyIcon } from "@iconify/types";
import { getIconData } from "@iconify/utils";

import { icons as mingcuteIcons } from "@iconify-json/mingcute";
import { icons as vscodeIcons } from "@iconify-json/vscode-icons";

import { IconCollection } from "@/components/icon/types/icon-collection.type";

export function useIconHook(
  collection: IconCollection,
  name: string,
): ExtendedIconifyIcon | null {
  switch (collection) {
    case "mingcute":
      return getIconData(mingcuteIcons, name);
    case "vscode-icons":
      return getIconData(vscodeIcons, name);
    default:
      return null;
  }
}
