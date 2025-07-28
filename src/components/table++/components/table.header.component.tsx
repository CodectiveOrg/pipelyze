import { ReactElement } from "react";

const HEADEINGS = [
  "Checkbox",
  "Name",
  "Size",
  "Type",
  "Modified",
  "Shared",
  "",
];

export default function TableHeaderComponent(): ReactElement {
  return (
    <thead>
      <tr>
        {HEADEINGS.map((heading, index) => (
          <th key={index}>{heading}</th>
        ))}
      </tr>
    </thead>
  );
}
