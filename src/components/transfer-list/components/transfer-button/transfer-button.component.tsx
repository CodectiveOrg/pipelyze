import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";
import { TransferListItem } from "@/components/transfer-list/types/transfer-list-item.type";

type Props = {
  items: readonly TransferListItem[];
  icon: string;
  enabled: (item: TransferListItem) => boolean;
  onClick: () => void;
};

export default function TransferButtonComponent({
  items,
  icon,
  enabled,
  onClick,
}: Props): ReactNode {
  return (
    <ButtonComponent
      variant="outlined"
      color="inherit"
      disabled={!items.some(enabled)}
      onClick={onClick}
    >
      <IconComponent name={icon} />
    </ButtonComponent>
  );
}
