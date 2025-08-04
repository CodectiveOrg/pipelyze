import type { Meta, StoryObj } from "@storybook/react";

import TransferListComponent from "./transfer-list.component";

const meta = {
  title: "Atoms/TransferList",
  component: TransferListComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TransferListComponent>;

export default meta;

type Story = StoryObj<typeof TransferListComponent>;

export const Default: Story = {
  args: {
    items: [
      "Item 1",
      "Item 2",
      "Item 3 (Intentionally Long Title)",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ],
  },
};
