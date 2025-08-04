import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";
import { Item } from "@/components/transfer-list/transfer-list.component";

type Props = {
  items: readonly Item[];
  icon: string;
  enabled: (item: Item) => boolean;
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
