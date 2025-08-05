import { TransferListItemPosition } from "@/components/transfer-list/types/transfer-list-item-position.type";

export type TransferListItem = {
  title: string;
  position: TransferListItemPosition;
  isChecked: boolean;
};
