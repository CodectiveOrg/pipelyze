import type { ReactNode } from "react";

import IconButtonComponent from "@/components/icon-button/icon-button.component";
import SidebarComponent from "@/components/sidebar/sidebar.component";

type Props = {
  open: boolean;
  onReset: () => void;
  onClose: () => void;
  children: ReactNode;
};

export default function FiltersSidebarComponent({
  open,
  onReset,
  onClose,
  children,
}: Props): ReactNode {
  const button = (
    <IconButtonComponent
      name="refresh-1-line"
      size="small"
      onClick={() => onReset()}
    />
  );
  return (
    <div>
      <SidebarComponent
        open={open}
        title="Filters"
        button={button}
        onClose={() => onClose()}
      >
        {children}
      </SidebarComponent>
    </div>
  );
}
