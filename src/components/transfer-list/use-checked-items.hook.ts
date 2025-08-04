import { useState } from "react";

export function useCheckedItems() {
  const [checked, setChecked] = useState<readonly string[]>([]);

  const handleToggle = (value: string): void => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return [checked, setChecked, handleToggle] as const;
}
