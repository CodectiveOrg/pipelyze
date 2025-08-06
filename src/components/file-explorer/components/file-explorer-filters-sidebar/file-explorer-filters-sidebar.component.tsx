import type { ReactNode } from "react";

import FiltersSidebarComponent from "@/components/filters-sidebar/filters-sidebar.component";
import TextFieldComponent from "@/components/text-field/text-field.component";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FileExplorerFiltersSidebarComponent({
  open,
  onClose,
}: Props): ReactNode {
  const handleReset = () => {};

  return (
    <FiltersSidebarComponent
      open={open}
      onReset={handleReset}
      onClose={onClose}
    >
      <TextFieldComponent label="Start Date" />
    </FiltersSidebarComponent>
  );
}
