import type { ReactNode } from "react";

import FiltersSidebarComponent from "@/components/filters-sidebar/filters-sidebar.component";
import RadioGroupComponent from "@/components/radio-group/radio-group.component";
import TextFieldComponent from "@/components/text-field/text-field.component";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FileExplorerFiltersSidebarComponent({
  open,
  onClose,
}: Props): ReactNode {
  return (
    <FiltersSidebarComponent open={open} onReset={() => {}} onClose={onClose}>
      <TextFieldComponent label="Title" />
      <TextFieldComponent label="Creation Date" type="date" />
      <TextFieldComponent label="Modification Date" type="date" />
      <TextFieldComponent label="Size" type="range" />
      <RadioGroupComponent
        name="engagement"
        items={[
          { color: "inherit", label: "Favorite" },
          { color: "inherit", label: "Unfavorite" },
        ]}
      />
    </FiltersSidebarComponent>
  );
}
