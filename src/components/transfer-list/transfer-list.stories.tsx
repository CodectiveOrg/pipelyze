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
      "The most recent item received",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ],
  },
};
